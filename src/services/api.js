import { stringify } from "qs";
import request from "../utils/request";

const baseUrl = "http://47.93.205.234:8082";

/* 添加用户 */
export async function addUser(params) {
  return request(`${baseUrl}/dashboardUser`, {
    method: `POST`,
    body: {
      ...params
    }
  });
}
/* 删除用户 */
export async function deleteUser(params) {
  return request(`${baseUrl}/dashboardUser/batch`, {
    method: `POST`,
    body: {
      list: params.list
    }
  });
}
/* 修改用户 */
export async function updateUser(params) {
  return request(`${baseUrl}/dashboardUser/${params.id}`, {
    method: `PUT`,
    body: {
      ...params
    }
  });
}
/* 查询所有用户 */
export async function getAllUsers(params) {
  return request(`${baseUrl}/dashboardUser?${stringify(params)}`, {
    method: `GET`
  });
}
/* 查询单个用户 */
export async function findUser(params) {
  return request(`${baseUrl}/dashboardUser/${params.id}`, {
    method: `GET`
  });
}

// 插件管理
/* 增加插件 */
export async function addPlugin(params) {
  return request(`${baseUrl}/plugin`, {
    method: `POST`,
    body: {
      ...params
    }
  });
}
/* 删除插件 */
export async function deletePlugin(params) {
  return request(`${baseUrl}/plugin/delete`, {
    method: `POST`,
    body: {
      list: params.list
    }
  });
}
/* 修改插件 */
export async function updatePlugin(params) {
  return request(`${baseUrl}/plugin/${params.id}`, {
    method: `PUT`,
    body: {
      ...params
    }
  });
}
/* 查询所有插件 */
export async function getAllPlugins(params) {
  return request(`${baseUrl}/plugin?${stringify(params)}`, {
    method: `GET`,
  });
}
/* 查询单个插件 */
export async function findPlugin(params) {
  return request(`${baseUrl}/plugin/${params.id}`, {
    method: `GET`
  });
}

// 认证管理
/* 增加认证 */
export async function addAuth(params) {
  return request(`${baseUrl}/appAuth`, {
    method: `POST`,
    body: {
      ...params,
    },
  });
}
/* 删除认证 */
export async function deleteAuth(params) {
  return request(`${baseUrl}/appAuth/batch`, {
    method: `POST`,
    body: {
      list: params.list,
    },
  });
}
/* 修改认证 */
export async function updateAuth(params) {
  return request(`${baseUrl}/appAuth/${params.id}`, {
    method: `PUT`,
    body: {
      ...params,
    },
  });
}
/* 查询所有认证 */
export async function getAllAuth(params) {
  return request(`${baseUrl}/appAuth?${stringify(params)}`, {
    method: `GET`,
  });
}
/* 查询单个认证 */
export async function findAuth(params) {
  return request(`${baseUrl}/appAuth/${params.id}`, {
    method: `GET`,
  });
}

// 选择器管理

/* 增加选择器 */
export async function addSelector(params) {
  return request(`${baseUrl}/selector`, {
    method: `POST`,
    body: {
      ...params
    }
  });
}
/* 删除选择器 */
export async function deleteSelector(params) {
  return request(`${baseUrl}/batch`, {
    method: `POST`,
    body: {
      ...params
    }
  });
}
/* 修改选择器 */
export async function updateSelector(params) {
  return request(`${baseUrl}/selector/${params.id}`, {
    method: `PUT`,
    body: {
      ...params
    }
  });
}
/* 查询所有选择器 */
export async function getAllSelectors(params) {
  return request(`${baseUrl}/selector?${stringify(params)}`, {
    method: `GET`,
  });
}
/* 查询单个选择器 */
export async function findSelector(params) {
  return request(`${baseUrl}/selector/${params.id}`, {
    method: `GET`
  });
}

/* 查询所有常量 */
export async function queryPlatform() {
  return request(`${baseUrl}/platform/enum`, {
    method: `GET`
  });
}

/* 登录 */
export async function queryLogin(params) {
  return request(`${baseUrl}/platform/login?${stringify(params)}`, {
    method: `GET`
  });
}

