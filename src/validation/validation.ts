export default interface Validation<Arguments extends unknown[], Return extends boolean = boolean> {

    validation : (...arg:Arguments)=>Return;
}
