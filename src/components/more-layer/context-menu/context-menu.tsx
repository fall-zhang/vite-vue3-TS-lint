import './context-menu.scss'
import { onMounted, onUnmounted, ref } from 'vue'
import menuConfig from './context-menu-list.json'
import {MenuItem} from './type'

const CONTEXT_ID = '__FALL_CONTEXT_MENU'

export default defineComponent({
  props: {
    menuList: {
      require: true,
      type: Array,
      default: () => menuConfig
    }
  },
  setup(props, {slots,emit}) {
    const contextMenu = ref<HTMLDivElement>()
    const menuContent = ref()
    const activeChain = ref<any[]>([])
    const clearSubMenuTimber: NodeJS.Timeout[] = []
    // onMounted(()=>{
    //   console.log('🚀 ~ onMounted ~ contextMenu.value:', contextMenu.value)
    //   if(contextMenu.value) {
    //     contextMenu.value.oncontextmenu = function(){
    //       console.log('🚀 ~ onMounted ~ false:', false)
    //       return false
    //     }
    //   }
    // })
    function clickOutSide() {
      menuContent.value.style.display = 'none'
    }
    onMounted(() => {
      document.addEventListener('click', clickOutSide)
    })
    onUnmounted(() => {
      document.removeEventListener('click', clickOutSide)
    })
    let outMenuEl: HTMLDivElement | null = null
    function onMouseOverNoChildren(receive?: string) {
      const timber = setTimeout(() => {
        let index = 0
        if (receive) {
          index = activeChain.value.findIndex(item => item === receive)
          activeChain.value = activeChain.value.slice(0, index + 1)
        } else {
          activeChain.value = []
        }
      }, 300)
      clearSubMenuTimber.push(timber)
    }

    function createElement(newElementPosition: Partial<ElementCSSInlineStyle['style']>) {
      if (document.querySelector('#'+CONTEXT_ID)) {
        outMenuEl = document.querySelector('#'+CONTEXT_ID)
        Object.keys(newElementPosition).forEach((key: string) => {
          if (!outMenuEl) return
          outMenuEl.style[key] = newElementPosition[key]
        })
        return
      }
      outMenuEl = document.createElement('div')
      outMenuEl.setAttribute('id', CONTEXT_ID)
      Object.keys(newElementPosition).forEach((key: string) => {
        if (!outMenuEl) return
        outMenuEl.style[key] = newElementPosition[key]
      })
      document.body.appendChild(outMenuEl)
    }

    function onClickTemplate(ev: MouseEvent) {
      console.log('🚀 ~ onClickTemplate ~ ev.target:', ev)
      ev.stopPropagation()
      ev.preventDefault()
      // const node = contextMenu.value.getBoundingClientRect()
      const newElementPosition:Partial<ElementCSSInlineStyle['style']> = {
        top: ev.pageY + 'px',
        left: ev.pageX + 'px',
        position: 'fixed',
        display: 'block',
        zIndex: '9999'
      }
      createElement(newElementPosition)
      menuContent.value.style = newElementPosition
      if (outMenuEl) {
        outMenuEl.innerHTML = ''
        outMenuEl.appendChild(menuContent.value)
      }
    }

    function onEnterMenuHasChildren(ev: MouseEvent, menuItem: MenuItem) {
      console.log('🚀 ~ onEnterMenuHasChildren ~ menuItem:', menuItem)
      console.log('🚀 ~ onEnterMenuHasChildren ~ menuItem:', activeChain.value)
      if (clearSubMenuTimber) {
        clearSubMenuTimber.forEach((timber, index) => {
          if (index !== clearSubMenuTimber.length - 1) clearTimeout(timber)
        })
      }
      if (!activeChain.value.includes(menuItem.key)) {
        activeChain.value.push(menuItem.key)
        if(props.menuList.includes(menuItem)){
          activeChain.value = [menuItem.key]
        }
      }
    }
    const onClickMenuItem = (info: any) => {
      emit('command', info)
    }
    const MenuListItem = (props: any, { slots }: any) => {
      const ulStyle = {
        top: '2px',
        left: '100%',
        right: '-200%',
        width: 'fit-content',
        position: 'absolute' as const
      }
      if (!props.current) return <></>
      return (
        <li
          class={{ 'menu-list-item': true, 'has-gap': props.current?.divided, 'has-children': true }}
          onMouseenter={ev => onEnterMenuHasChildren(ev, props.current)}
          onClick={() => onClickMenuItem(props.current)}
        >
          {slots.default()}
          <div class="right-arrow-icon">
            <svg width="21" height="21" stroke-width="1.5" viewBox="0 0 24 24" fill="none" color="#000000">
              <path d="M9 6L15 12L9 18" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </div>
          {activeChain.value.includes(props.current.key)
            ? (
              <div class="menu-container" style={ulStyle}>
                <ul class="menu-list">
                  {props.current?.children.map((item: any) => {
                    if (item.children) {
                      return (
                        <MenuListItem key={item.key} current={item}>
                          {item.label}
                        </MenuListItem>
                      )
                    }
                    return (
                      <li
                        key={item.key}
                        class={{ 'menu-list-item': true, 'has-gap': item.divided }}
                        onMouseover={() => onMouseOverNoChildren(props.current.key)}
                        onClick={() => onClickMenuItem(item)}
                      >
                        {item.label}
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
            : (
              ''
            )}
        </li>
      )
    }
    return () => (
      <>
        <div ref={contextMenu} onContextmenu={(e) => {e.preventDefault();onClickTemplate(e)}} style="display:inline-block">
          {slots.default ?slots.default():''}
        </div>
        <div ref={menuContent} style="display:none" class="menu-container">
          {
            <ul class="menu-list">
              {props.menuList.map((item: any) => {
                if (item.children) {
                  return (
                    <MenuListItem key={item.key} current={item}>
                      {item.label}
                    </MenuListItem>
                  )
                }
                return (
                  <li
                    key={item.key}
                    class={{ 'menu-list-item': true, 'has-gap': item.divided }}
                    onMouseover={() => onMouseOverNoChildren()}
                    onClick={() => onClickMenuItem(item)}
                  >
                    {item.label}
                    <div style={{ width: '20px', height: '20px' }}></div>
                  </li>
                )
              })}
            </ul>
          }
        </div>
      </>
    )
  }
})
