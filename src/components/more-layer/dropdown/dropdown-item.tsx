import type { MenuItem } from './type'
const MenuListItem = defineComponent({
  props:{
    current:{
      require:true,
      type:Object,
    },
    activeChain:{
      require:true,
      type:Array,
      default:[]
    },
    onClickMenuItem:{
      require:true,
      default:()=>({}),
      type:Function
    },
    onEnterMenuHasChildren:{
      require:true,
      default:()=>({}),
      type:Function
    },
    onMouseOverNoChildren:{
      require:true,
      default:()=>({}),
      type:Function
    }
  },
  setup(props,{slots}) {
    const {current,onClickMenuItem,onEnterMenuHasChildren,activeChain,onMouseOverNoChildren} = props
    const ulStyle = {
      top: '2px',
      left: '100%',
      right: '-200%',
      width: 'fit-content',
      position: 'absolute' as const,
    }
    if (!current) return <></>
    return (
      <li class={{ 'menu-list-item': true, 'has-gap': current?.divided, 'has-children': true }} onMouseenter={(ev) => onEnterMenuHasChildren(ev, current)} onClick={() => onClickMenuItem(current)}>
        {slots.default ? slots.default():''}
        <div class="right-arrow-icon">
          <svg width="21" height="21" stroke-width="1.5" viewBox="0 0 24 24" fill="none" color="#000000"><path d="M9 6L15 12L9 18" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        </div>
        {activeChain.includes(current.key)
          ? <div class="menu-container" style={ulStyle}>
            <ul class="menu-list" >
              {current?.children.map((item: MenuItem) => {
                if (item.children) {
                  return <MenuListItem key={item.key} current={item} >{item.label}</MenuListItem>
                }
                return (
                  <li key={item.key} class={{ 'menu-list-item': true, 'has-gap': item.divided }}
                    onMouseover={() => onMouseOverNoChildren(current.key)} onClick={() => onClickMenuItem(item)}>
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
})

export default MenuListItem