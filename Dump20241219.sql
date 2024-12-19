-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: localhost    Database: bienetre
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.32-MariaDB

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
-- Table structure for table `mood_entry`
--

DROP TABLE IF EXISTS `mood_entry`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mood_entry` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `cognitive_focus` varchar(255) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `emotional_reactions` int(11) NOT NULL,
  `exercise_duration` int(11) NOT NULL,
  `food_balance` varchar(255) DEFAULT NULL,
  `mood` varchar(255) DEFAULT NULL,
  `negative_thoughts` varchar(255) DEFAULT NULL,
  `sleep_quality` int(11) NOT NULL,
  `social_interactions` int(11) NOT NULL,
  `stress_level` int(11) NOT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK1u72e2qfhpgj8crrjtx4py12c` (`user_id`),
  CONSTRAINT `FK1u72e2qfhpgj8crrjtx4py12c` FOREIGN KEY (`user_id`) REFERENCES `utilisateur` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mood_entry`
--

LOCK TABLES `mood_entry` WRITE;
/*!40000 ALTER TABLE `mood_entry` DISABLE KEYS */;
INSERT INTO `mood_entry` VALUES (1,'Légère','2024-11-24',2,0,'Moyennement équilibré','Heureux','Quelques pensées négatives',4,2,7,NULL),(2,'Sévère','2024-12-13',10,0,'Bien équilibré','Heureux','Quelques pensées négatives',4,1,4,NULL),(3,'Légère','2024-12-18',2,7,'Bien équilibré','Très Heureux','Quelques pensées négatives',2,3,3,NULL),(4,NULL,'2024-12-10',0,0,NULL,'Happy',NULL,0,0,0,1),(5,NULL,'2024-12-10',0,0,NULL,'sad',NULL,0,0,0,2),(6,'Aucune','2024-12-11',7,0,'Moyennement équilibré','Neutre','Quelques pensées négatives',4,2,12,NULL),(7,'Légère','2024-12-04',7,2,'Bien équilibré','Très Heureux','Quelques pensées négatives',4,5,4,NULL),(8,'Sévère','2024-12-04',7,4,'Bien équilibré','Heureux','Aucune',3,2,0,NULL),(9,'Sévère','2024-12-01',2,2,'Mal équilibré','Très Heureux','Quelques pensées négatives',1,1,4,NULL),(10,'Légère','2024-11-29',1,2,'Bien équilibré','Heureux','Quelques pensées négatives',2,2,2,NULL),(11,'Légère','2024-12-05',4,0,'Bien équilibré','Heureux','Quelques pensées négatives',1,3,2,NULL),(12,'Légère','2024-12-05',0,0,'Moyennement équilibré','Heureux','Quelques pensées négatives',1,0,0,NULL),(13,'high',NULL,8,45,'balanced','happy','none',7,5,2,1),(14,'Sévère','2024-12-06',0,1,'Bien équilibré','Heureux','Quelques pensées négatives',2,0,0,5),(15,'Sévère','2024-12-07',5,1,'Moyennement équilibré','Neutre','Quelques pensées négatives',2,0,6,5),(16,'Légère','2024-12-06',0,0,'Moyennement équilibré','Triste','Souvent des pensées négatives',2,0,0,17),(17,'Légère','2024-12-06',0,0,'Mal équilibré','Neutre','Souvent des pensées négatives',1,0,0,5),(20,'Légère','2024-12-06',10,2,'Moyennement équilibré','Très Heureux','Aucune',4,3,5,5),(21,'Légère','2024-12-12',4,0,'Moyennement équilibré','Triste','Aucune',1,0,0,5),(22,'Légère','2024-12-12',3,2,'Bien équilibré','Très Heureux','Quelques pensées négatives',2,2,5,19);
/*!40000 ALTER TABLE `mood_entry` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rappel`
--

DROP TABLE IF EXISTS `rappel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rappel` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `date_rappel` date DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `heure_rappel` time(6) DEFAULT NULL,
  `termine` bit(1) NOT NULL,
  `titre` varchar(255) DEFAULT NULL,
  `utilisateur_id` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKb2gius7tyqimkowoeqj4od6ty` (`utilisateur_id`),
  CONSTRAINT `FKb2gius7tyqimkowoeqj4od6ty` FOREIGN KEY (`utilisateur_id`) REFERENCES `utilisateur` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rappel`
--

LOCK TABLES `rappel` WRITE;
/*!40000 ALTER TABLE `rappel` DISABLE KEYS */;
INSERT INTO `rappel` VALUES (1,'2024-12-15','je dois le prend ','15:27:00.000000',_binary '','Medicament',5),(2,'2024-12-14','un amie','15:34:00.000000',_binary '','rencontre',5),(3,'2024-12-22','amie','15:39:00.000000',_binary '\0','rencontre',5),(4,'2024-12-15','de cheveux','16:39:00.000000',_binary '\0','vitamine',5),(5,'2024-12-17','une amie','08:40:00.000000',_binary '\0','rencontre',5),(6,'2024-12-16','english test','09:37:00.000000',_binary '','writing task',5),(7,'2024-12-16','non terminer ','13:39:00.000000',_binary '','projet jeux ',5);
/*!40000 ALTER TABLE `rappel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `temoignage`
--

DROP TABLE IF EXISTS `temoignage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `temoignage` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `avatar` varchar(255) NOT NULL,
  `date` date NOT NULL,
  `genre` varchar(255) NOT NULL,
  `text` varchar(255) DEFAULT NULL,
  `username` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `temoignage`
--

LOCK TABLES `temoignage` WRITE;
/*!40000 ALTER TABLE `temoignage` DISABLE KEYS */;
INSERT INTO `temoignage` VALUES (1,'https://cdn-icons-png.flaticon.com/512/3233/3233486.png','2024-12-03','female','hello','jiji'),(2,'https://cdn-icons-png.flaticon.com/512/3233/3233486.png','2024-12-03','female','coucou','rourou'),(3,'https://cdn-icons-png.flaticon.com/512/3884/3884891.png','2024-12-07','male','hhh','11'),(4,'https://cdn-icons-png.flaticon.com/512/3884/3884891.png','2024-12-10','male','nn','rourou'),(5,'https://cdn-icons-png.flaticon.com/512/3884/3884891.png','2024-12-10','male','helllo','test'),(6,'http://example.com/avatar.jpg','2024-12-12','male','Ce témoignage est très inspirant.','JohnDoe'),(7,'https://cdn-icons-png.flaticon.com/512/3233/3233486.png','2024-12-13','female','super application','rourou'),(8,'https://cdn-icons-png.flaticon.com/512/3884/3884891.png','2024-12-13','male','cc','rourou'),(9,'https://cdn-icons-png.flaticon.com/512/3233/3233486.png','2024-12-13','female','j\'ai un probleme ','rourou'),(10,'https://cdn-icons-png.flaticon.com/512/3884/3884891.png','2024-12-16','male','hello','test1');
/*!40000 ALTER TABLE `temoignage` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `utilisateur`
--

DROP TABLE IF EXISTS `utilisateur`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `utilisateur` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `utilisateur`
--

LOCK TABLES `utilisateur` WRITE;
/*!40000 ALTER TABLE `utilisateur` DISABLE KEYS */;
INSERT INTO `utilisateur` VALUES (1,'maryam@gmail.com','maryam','00'),(2,'dd@gmail.com','dd','11'),(3,'ryma@gmail.com','ryma','12'),(4,'oumaima@gmail.com','oumaima','111'),(5,'rourou@gmail.com','rourou','rourou'),(6,'mm@gmail.com','mm','mm'),(7,'najla@gmail.com','najla','najla'),(8,'mimi@gmail.com','mimi','mimi'),(9,'user@example.com',NULL,'password123'),(10,'jj@gmail.com','jj','123'),(11,'rymaaa@gmail.com','rymaaa','0000'),(12,NULL,NULL,NULL),(13,'ss@gmail.com','ss','12'),(14,'jiji@gmail.com','jiji','01'),(15,'11@gmail.com','11','11'),(16,'mo@gmail.com','mo','mo'),(17,'test@gmail.com','test','test'),(18,'hi@gmail.com','hi','hi'),(19,'test1@gmail.com','test1','test1');
/*!40000 ALTER TABLE `utilisateur` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-12-19 10:40:44
