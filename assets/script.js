const app = new Vue({
  el: '#clock',
  data() {
    return {
      now: luxon.DateTime.local().set({ milliseconds: 0 }),
      end: luxon.DateTime.local().set({ milliseconds: 0 }).plus({ seconds: 10 }),
      tick: null
    }
  },
  watch: {
    now() {
      if (this.finished) {
        clearInterval(this.tick)
      }
    }
  },
  computed: {
    remaining() {
      return this.end.diff(this.now).toObject()
    },
    display() {
      return luxon.Duration.fromObject(this.remaining).toFormat('hh:mm:ss')
    },
    finished() {
      return this.now >= this.end
    }
  },
  mounted() {
    this.tick = setInterval(() => {
      this.now = luxon.DateTime.local().set({ milliseconds: 0 })
    }, 1000)
  }
})