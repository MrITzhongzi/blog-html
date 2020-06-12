import LocalStorageUtil from "./LocalStorageUtil";

/**
 * 公共的工具类
 */
class CommenUtil {

    constructor() {

    }

    /**
     * 根据token判断是否登录 登录返回 true  未登录 返回false
     * @returns {boolean}
     */
    static checkToken() {
        let storage = new LocalStorageUtil()
        let token = storage.get("blog_token");
        if (token) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * 根据是否登录跳转到不同的url
     * @param context 上下文
     * @param loginUrl 登录跳转的路由
     * @param notLoginUrl 未登录跳转的路由
     */
    static conditionJump(context, loginUrl, notLoginUrl) {
        if (CommenUtil.checkToken()) {
            context.$router.push(loginUrl);
        } else {
            context.$router.push(notLoginUrl);
        }
    }

}

export default CommenUtil;