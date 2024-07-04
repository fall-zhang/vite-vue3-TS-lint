import { defineComponent} from 'vue'
import { useMotion } from '@vueuse/motion'

/** 封装 @vueuse/motion 动画库中的自定义指令v-motion */
export default defineComponent({
  name: 'Motion',
  props: {
    delay: {
      type: Number,
      default: 50
    }
  },
  setup({ delay }, { slots }) {
    const divRef = ref()
    const motionInstance = useMotion(divRef, {
      initial: { opacity: 0, y: 100 },
      enter: {
        opacity: 1,
        y: 0,
        transition: {
          delay
        }
      }
    })
    // motionInstance.set('enter')
    return ()=>(
      <div ref={divRef}>{slots.default? slots.default():''}</div>
    )
  }
})
