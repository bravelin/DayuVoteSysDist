-- MySQL dump 10.13  Distrib 8.0.17, for Linux (x86_64)
--
-- Host: localhost    Database: votesys
-- ------------------------------------------------------
-- Server version	8.0.17

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `activity`
--

DROP TABLE IF EXISTS `activity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `activity` (
  `id` char(32) COLLATE utf8mb4_general_ci NOT NULL,
  `title` varchar(500) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `signUpStartTime` datetime DEFAULT NULL,
  `signUpEndTime` datetime DEFAULT NULL,
  `voteStartTime` datetime DEFAULT NULL,
  `voteEndTime` datetime DEFAULT NULL,
  `maxTotalVoteNumber` int(11) DEFAULT NULL,
  `maxDayVoteNumber` int(11) DEFAULT NULL,
  `maxTotalVotePlayer` int(11) DEFAULT NULL,
  `needDiamond` char(1) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `needAudit` char(1) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `autoAdjust` char(1) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `pictures` varchar(5000) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `content` varchar(5000) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `description` mediumtext COLLATE utf8mb4_general_ci,
  `prizes` mediumtext COLLATE utf8mb4_general_ci,
  `remark` varchar(1000) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `status` char(1) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `createUserId` char(32) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `p0` char(32) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `p1` char(32) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `voteCount` int(11) DEFAULT '0',
  `visitCount` int(11) DEFAULT '0',
  `popularity` float(8,1) DEFAULT '0.0',
  `playerCount` int(11) DEFAULT '0',
  `moneyCount` int(11) DEFAULT '0',
  `starPlayer` char(32) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `backgroundMusic` varchar(500) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `createRealName` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `toRankSys` char(1) COLLATE utf8mb4_general_ci DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `complaint`
--

DROP TABLE IF EXISTS `complaint`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `complaint` (
  `id` char(32) COLLATE utf8mb4_general_ci NOT NULL,
  `userId` char(32) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `name` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `tel` char(11) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `content` varchar(5000) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `actId` char(32) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `createUserId` char(32) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `p0` char(32) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `p1` char(32) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `status` char(1) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `dict`
--

DROP TABLE IF EXISTS `dict`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dict` (
  `id` char(32) COLLATE utf8mb4_general_ci NOT NULL,
  `dictKey` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `dictValue` varchar(1000) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `log`
--

DROP TABLE IF EXISTS `log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `log` (
  `id` char(32) COLLATE utf8mb4_general_ci NOT NULL,
  `userId` char(32) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `userName` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `content` varchar(1000) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `manager`
--

DROP TABLE IF EXISTS `manager`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `manager` (
  `id` char(32) COLLATE utf8mb4_general_ci NOT NULL,
  `loginName` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `loginPassword` varchar(200) COLLATE utf8mb4_general_ci NOT NULL,
  `realName` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `lastLoginTime` datetime DEFAULT NULL,
  `role` int(11) NOT NULL,
  `p0` char(32) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `p1` char(32) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `miniPower` char(1) COLLATE utf8mb4_general_ci DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `player`
--

DROP TABLE IF EXISTS `player`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `player` (
  `id` char(32) COLLATE utf8mb4_general_ci NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `tel` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `no` int(11) DEFAULT NULL,
  `introduce` mediumtext COLLATE utf8mb4_general_ci,
  `pictures` varchar(5000) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `remark` varchar(1000) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `address` varchar(1000) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `type` char(1) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `status` char(1) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `totalVotes` int(11) DEFAULT '0',
  `diamondVotes` int(11) DEFAULT '0',
  `adjustVotes` int(11) DEFAULT '0',
  `cashGift` int(11) DEFAULT '0',
  `actId` char(32) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `userId` char(32) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `createUserId` char(32) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `p0` char(32) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `p1` char(32) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `imgWidth` int(11) DEFAULT NULL,
  `imgHeight` int(11) DEFAULT NULL,
  `shareCount` int(11) DEFAULT '0',
  `violationCount` int(11) DEFAULT '0',
  `prohibitTime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `trade`
--

DROP TABLE IF EXISTS `trade`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `trade` (
  `id` char(32) COLLATE utf8mb4_general_ci NOT NULL,
  `userId` char(32) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `prePayId` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `totalFee` int(11) DEFAULT NULL,
  `voteCount` int(11) DEFAULT NULL,
  `ip` varchar(64) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `place` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `timeStart` char(14) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `timeExpire` char(14) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `timeEnd` char(14) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `transactionId` char(32) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `actId` char(32) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `playerId` char(32) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `createUserId` char(32) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `p0` char(32) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `p1` char(32) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `status` char(1) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` char(32) COLLATE utf8mb4_general_ci NOT NULL,
  `openId` varchar(130) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `nickName` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `sex` char(1) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `province` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `city` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `country` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `area` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `headImgUrl` varchar(500) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `ip` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `accessToken` varchar(1000) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `refreshToken` varchar(1000) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `expireTime` int(11) DEFAULT '0',
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `visit`
--

DROP TABLE IF EXISTS `visit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `visit` (
  `id` char(32) COLLATE utf8mb4_general_ci NOT NULL,
  `actId` char(32) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `playerId` char(32) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `userId` char(32) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `createUserId` char(32) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `p0` char(32) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `p1` char(32) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `vote`
--

DROP TABLE IF EXISTS `vote`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vote` (
  `id` char(32) COLLATE utf8mb4_general_ci NOT NULL,
  `actId` char(32) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `playerId` char(32) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `type` char(1) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `voteNum` int(11) DEFAULT NULL,
  `diamondAmount` int(11) DEFAULT NULL,
  `voter` char(32) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `createUserId` char(32) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `p0` char(32) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `p1` char(32) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-11-09 14:16:36
