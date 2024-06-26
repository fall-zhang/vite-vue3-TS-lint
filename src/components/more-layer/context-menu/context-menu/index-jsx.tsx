import './style/index.scss'
export default {
  props: {
    menuList: {
      require: true,
      type: Array,
      default: () => [
        {
          label: '聚合',
          key: '1'
        },
        {
          label: '显示筛选',
          key: '2',
          divided: true
        },
        {
          label: '排序',
          key: '3',
          children: [
            {
              label: '菜单 3-1',
              key: '3-1'
            },
            {
              label: '菜单 3-2',
              key: '3-2',
              children: [
                {
                  label: '菜单 3-2-1',
                  key: '3-2-1'
                },
                {
                  label: '菜单 3-2-2',
                  key: '3-2-2'
                },
              ]
            },
          ]
        },
        {
          label: '设置别名',
          key: '3',
        },
        {
          label: '删除',
          key: '3',
        },
      ]
    }
  },
  methods: {
    watchPink() {

    }
  },
  setup(props: any, context: any) {
    const contexMenu = ref()
    const menuContent = ref()
    // document.addEventListener('click')
    function clickOutSide() {

    }
    onMounted(() => {
      window.document.addEventListener('click', clickOutSide)
    })
    onUnmounted(() => {
      document.removeEventListener('click', clickOutSide)
    })
    let outMenuEl: HTMLDivElement | null = null
    const activeChain = ref<any[]>([])
    const clearSubMenuTimber: number[] = []
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

    function createElement(newElementPosition: any) {
      if (document.querySelector('#pink_99667')) {
        return
      }
      outMenuEl = document.createElement('div')
      outMenuEl.setAttribute('id', 'pink_99667')
      Object.keys(newElementPosition).forEach((key: string) => {
        if (!outMenuEl) return
        outMenuEl.style[key] = newElementPosition[key]
      })
      document.body.appendChild(outMenuEl)
    }

    function onClickTemplate(ev: MouseEvent) {
      const node = contexMenu.value.getBoundingClientRect()
      const newElementPosition = {
        top: node.height + node.top + 'px',
        left: node.x + 'px',
        position: 'fixed'
      }
      createElement(newElementPosition)
      menuContent.value.style = newElementPosition
      if (outMenuEl) {
        outMenuEl.innerHTML = ''
        outMenuEl.appendChild(menuContent.value)
      }
    }

    function onEnterMenuHasChildren(ev: MouseEvent, menuItem: any) {
      if (clearSubMenuTimber) clearSubMenuTimber.forEach((timber) => clearTimeout(timber))
      if (!activeChain.value.includes(menuItem.key)) {
        activeChain.value.push(menuItem.key)
      }
    }
    const onClickMenuItem = (info: any) => {
      context.emit('command', info)
    }
    const MenuListItem = (props: any, { slots }: any) => {
      const ulStyle = {
        top: '2px',
        left: '100%',
        right: '-200%',
        width: 'fit-content',
        // transform: 'translate(100%)',
        position: 'absolute' as 'absolute',
      }
      // const listItem = ref()
      // console.log(listItem.value);
      if (!props.current) return <></>
      return (
        //  ref={listItem}
        <li class={{ 'menu-list-item': true, 'has-gap': props.current?.divided, 'has-children': true }} onMouseenter={(ev) => onEnterMenuHasChildren(ev, props.current)} onClick={() => onClickMenuItem(props.current)}>
          {slots.default()}
          <div class="rigit-arrow-icon">
            <svg width="21" height="21" stroke-width="1.5" viewBox="0 0 24 24" fill="none" color="#000000"><path d="M9 6L15 12L9 18" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          </div>
          {activeChain.value.includes(props.current.key)
            ? <div class="menu-container" style={ulStyle}>
              <ul class="menu-list" >
                {props.current?.children.map((item: any) => {
                  if (item.children) {
                    return <MenuListItem key={item.key} current={item} >{item.label}</MenuListItem>
                  }
                  return (
                    <li key={item.key} class={{ 'menu-list-item': true, 'has-gap': item.divided }}
                      onMouseover={() => onMouseOverNoChildren(props.current.key)} onClick={() => onClickMenuItem(item)}>
                      {item.label}
                    </li>
                  )
                })}
              </ul>
            </div>
            : ''
          }
        </li>
      )
    }
    return () => (
      <div>
        <div ref={contexMenu} style="height: 28px;width: 120px;background-color: pink;cursor:pointer" onClick={onClickTemplate}></div>
        <div ref={menuContent} style="display:none" class="menu-container">
          {<ul class="menu-list">
            {props.menuList.map((item: any) => {
              if (item.children) {
                return <MenuListItem key={item.key} current={item} >{item.label}</MenuListItem>
              }
              return (
                <li key={item.key} class={{ 'menu-list-item': true, 'has-gap': item.divided }}
                  onMouseover={() => onMouseOverNoChildren()} onClick={() => onClickMenuItem(item)}>
                  {item.label}
                  <div style={{ width: '20px', height: '20px' }}></div>
                </li>
              )
            })}
          </ul>}
        </div>
      </div>)
  }
}
