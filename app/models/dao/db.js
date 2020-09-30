/*
 * @Description: 数据库连接
 * @Author: hai-27
 * @Date: 2020-02-07 16:51:56
 * @LastEditors: hai-27
 * @LastEditTime: 2020-02-27 13:20:11
 */
var mysql = require('mysql');
const { dbConfig } = require('../../../config');
var pool = mysql.createPool(dbConfig);

var db = {};

//插入分装
db.insert = function (sql,param) {

  return new Promise((resolve,reject) => {
    // 取出链接
    pool.getConnection(function (err, connection) {

      if (err) {
        reject(err);
        return;
      }
      connection.insert(sql,param)
    })
  })
},
//修改分装
    db.insert = function (sql,param) {

      return new Promise((resolve,reject) => {
        // 取出链接
        pool.getConnection(function (err, connection) {

          if (err) {
            reject(err);
            return;
          }
          connection.update(sql,param)
        })
      })
    },
//删除分装
    db.insert = function (sql,param) {

      return new Promise((resolve,reject) => {
        // 取出链接
        pool.getConnection(function (err, connection) {

          if (err) {
            reject(err);
            return;
          }
          connection.delete(sql,param)
        })
      })
    },
//查询分装
db.query = function (sql, params) {

  return new Promise((resolve, reject) => {
    // 取出链接
    pool.getConnection(function (err, connection) {

      if (err) {
        reject(err);
        return;
      }

      connection.query(sql, params, function (error, results, fields) {
        console.log(`${ sql }=>${ params }`);
        // 释放连接
        connection.release();
        if (error) {
          reject(error);
          return;
        }
          resolve(results);
      });

    });
  });
}
// 导出对象
module.exports = db;
