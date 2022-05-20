import { Button, Pagination } from "element-ui";

const element = {
    install: function (Vue) {
        Vue.use(Button);
        Vue.use(Pagination)
    }
};
export default element;