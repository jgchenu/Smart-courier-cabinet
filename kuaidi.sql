/*
Navicat MySQL Data Transfer

Source Server         : localmysql
Source Server Version : 50721
Source Host           : localhost:3306
Source Database       : kuaidi

Target Server Type    : MYSQL
Target Server Version : 50721
File Encoding         : 65001

Date: 2018-03-05 18:02:14
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for chest
-- ----------------------------
DROP TABLE IF EXISTS `chest`;
CREATE TABLE `chest` (
  `chestid` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `phone` varchar(11) DEFAULT NULL,
  `randcode` int(6) DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `manid` int(11) DEFAULT NULL,
  PRIMARY KEY (`chestid`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of chest
-- ----------------------------
INSERT INTO `chest` VALUES ('1', null, null, '0', null);
INSERT INTO `chest` VALUES ('2', null, null, '0', null);
INSERT INTO `chest` VALUES ('3', null, null, '0', null);
INSERT INTO `chest` VALUES ('4', null, null, '0', null);
INSERT INTO `chest` VALUES ('5', null, null, '0', null);
INSERT INTO `chest` VALUES ('6', null, null, '0', null);
INSERT INTO `chest` VALUES ('7', null, null, '0', null);
INSERT INTO `chest` VALUES ('8', null, null, '0', null);
INSERT INTO `chest` VALUES ('9', null, null, '0', null);
INSERT INTO `chest` VALUES ('10', null, null, '0', null);

-- ----------------------------
-- Table structure for deposit
-- ----------------------------
DROP TABLE IF EXISTS `deposit`;
CREATE TABLE `deposit` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `chestid` int(11) NOT NULL,
  `manid` int(11) NOT NULL,
  `phone` varchar(11) NOT NULL,
  `randcode` int(6) NOT NULL,
  `time` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of deposit
-- ----------------------------
INSERT INTO `deposit` VALUES ('4', '1', '1', '13434998099', '462968', '2018-03-05 07:15:16');
INSERT INTO `deposit` VALUES ('5', '1', '8', '13005416332', '858474', '2018-03-05 09:04:38');
INSERT INTO `deposit` VALUES ('6', '2', '8', '13005416332', '420571', '2018-03-05 09:07:29');
INSERT INTO `deposit` VALUES ('7', '3', '8', '13005416332', '870481', '2018-03-05 09:17:47');
INSERT INTO `deposit` VALUES ('8', '1', '8', '13005416332', '400864', '2018-03-05 09:48:36');
INSERT INTO `deposit` VALUES ('9', '1', '8', '13434998099', '389358', '2018-03-05 09:55:31');

-- ----------------------------
-- Table structure for man
-- ----------------------------
DROP TABLE IF EXISTS `man`;
CREATE TABLE `man` (
  `manid` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `phone` varchar(11) NOT NULL,
  `password` varchar(20) NOT NULL,
  `company` varchar(255) NOT NULL,
  PRIMARY KEY (`manid`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of man
-- ----------------------------
INSERT INTO `man` VALUES ('1', 'jgchen', '13434998095', '13434998099', '深圳大学');
INSERT INTO `man` VALUES ('2', '陈建光', '13434998090', '13434998099', '申通快递');
INSERT INTO `man` VALUES ('3', '陈建光', '13434998091', '13434998099', '申通快递');
INSERT INTO `man` VALUES ('4', '陈建光', '13434998092', '13434998099', '申通快递');
INSERT INTO `man` VALUES ('5', '陈建光', '13434998093', '13434998099', '申通快递');
INSERT INTO `man` VALUES ('6', '陈建光', '13434998094', '13434998099', '申通快递');
INSERT INTO `man` VALUES ('7', '王馨', '13005416332', '13434998099', '申通快递');
INSERT INTO `man` VALUES ('8', '隔壁老王', '13434998099', '13434998099', '顺丰快递');

-- ----------------------------
-- Table structure for takeout
-- ----------------------------
DROP TABLE IF EXISTS `takeout`;
CREATE TABLE `takeout` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `chestid` int(11) NOT NULL,
  `manid` int(11) NOT NULL,
  `phone` varchar(11) NOT NULL,
  `randcode` int(6) NOT NULL,
  `time` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of takeout
-- ----------------------------
INSERT INTO `takeout` VALUES ('1', '2', '1', '13434998099', '412855', '2018-03-05 08:38:41');
INSERT INTO `takeout` VALUES ('2', '2', '8', '13005416332', '420571', '2018-03-05 09:43:27');
INSERT INTO `takeout` VALUES ('3', '3', '8', '13005416332', '870481', '2018-03-05 09:44:27');
INSERT INTO `takeout` VALUES ('4', '1', '8', '13005416332', '858474', '2018-03-05 09:47:21');
INSERT INTO `takeout` VALUES ('5', '1', '8', '13005416332', '400864', '2018-03-05 09:48:52');
INSERT INTO `takeout` VALUES ('6', '1', '8', '13434998099', '389358', '2018-03-05 09:56:51');
