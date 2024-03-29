-- MySQL dump 10.13  Distrib 8.0.29, for Linux (x86_64)
--
-- Host: localhost    Database: JediDataBase
-- ------------------------------------------------------
-- Server version	8.0.32-0ubuntu0.20.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `estilo_batalla`
--

DROP TABLE IF EXISTS `estilo_batalla`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `estilo_batalla` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) COLLATE utf8mb4_general_ci NOT NULL,
  `is_activo` int NOT NULL DEFAULT '1',
  `create_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `update_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estilo_batalla`
--

LOCK TABLES `estilo_batalla` WRITE;
/*!40000 ALTER TABLE `estilo_batalla` DISABLE KEYS */;
INSERT INTO `estilo_batalla` VALUES (1,'Shii-Cho',1,'2023-02-10 00:56:33',NULL),(2,'Makashi',1,'2023-02-10 00:56:33',NULL),(3,'Soresu',1,'2023-02-10 00:56:33',NULL),(4,'Ataru',1,'2023-02-10 00:58:46',NULL),(5,'Shien / Djem So',1,'2023-02-10 00:58:46',NULL),(6,'Niman',1,'2023-02-10 00:58:46',NULL),(7,'Juyo',1,'2023-02-10 00:58:46',NULL);
/*!40000 ALTER TABLE `estilo_batalla` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `apellido_paterno` varchar(45) NOT NULL,
  `apellido_materno` varchar(45) NOT NULL,
  `is_activo` int NOT NULL DEFAULT '1',
  `create_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `update_date` datetime DEFAULT NULL,
  `estilo_batalla_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_user_estilo_batalla_idx` (`estilo_batalla_id`),
  CONSTRAINT `fk_user_estilo_batalla` FOREIGN KEY (`estilo_batalla_id`) REFERENCES `estilo_batalla` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (2,'asoka','tano','Cristina',0,'2023-02-10 03:58:31','2023-02-10 05:54:52',5),(3,'Dooku','Darth','Tiranus',1,'2023-02-10 04:14:27',NULL,2),(4,'Yoda','XX','XX',1,'2023-02-10 04:15:18',NULL,2),(5,'Anakin','Skywalker','XX',1,'2023-02-10 04:16:06',NULL,2),(6,'Obi-Wan','Kenovi','xxx',1,'2023-02-10 04:17:07',NULL,7),(7,'Qui-Gon','Jinn','xxx',1,'2023-02-10 04:17:42',NULL,5),(8,'Cal','Kestis','xxx',1,'2023-02-10 04:18:28',NULL,4);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-02-10  5:56:17
