// Wrapper for mark.js to fix VitePress import issues
import MarkJS from 'mark.js/dist/mark.es6.js'

export default function Mark(ctx) {
  const instance = new MarkJS(ctx)
  this.mark = (sv, opt) => {
    instance.mark(sv, opt)
    return this
  }
  this.markRegExp = (sv, opt) => {
    instance.markRegExp(sv, opt)
    return this
  }
  this.markRanges = (sv, opt) => {
    instance.markRanges(sv, opt)
    return this
  }
  this.unmark = (opt) => {
    instance.unmark(opt)
    return this
  }
  return this
}
