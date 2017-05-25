export default function safeSetState(options = {}) {
  return function(target) {
    target.isTestable = true;
    const setState = target.prototype.setState;
    const componentWillUnmount = target.prototype.componentWillUnmount;
    target.prototype.setState = function() {
      return setState.apply(this, [...arguments]);
    };
    target.prototype.componentWillUnmount = function() {
      this.setState = () => {};
      return componentWillUnmount.apply(this, [...arguments]);
    };
  };
}
