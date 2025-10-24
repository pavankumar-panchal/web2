-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Oct 16, 2025 at 03:15 AM
-- Server version: 5.5.68-MariaDB
-- PHP Version: 7.4.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `CRM_API`
--

-- --------------------------------------------------------

--
-- Table structure for table `emails`
--

CREATE TABLE `emails` (
  `id` int(11) NOT NULL,
  `user_id` int(10) UNSIGNED DEFAULT NULL,
  `raw_emailid` varchar(150) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sp_account` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sp_domain` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `domain_verified` tinyint(1) DEFAULT '0',
  `domain_status` tinyint(1) DEFAULT '0',
  `validation_response` text COLLATE utf8mb4_unicode_ci,
  `domain_processed` tinyint(1) DEFAULT '0',
  `client_ip` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `csv_list_id` int(10) UNSIGNED DEFAULT NULL,
  `validation_status` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `worker_id` tinyint(3) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `emails`
--

INSERT INTO `emails` (`id`, `user_id`, `raw_emailid`, `sp_account`, `sp_domain`, `domain_verified`, `domain_status`, `validation_response`, `domain_processed`, `client_ip`, `csv_list_id`, `validation_status`, `worker_id`) VALUES
(1, 1, 'naveenbgowda@gmail.com', 'naveenbgowda', 'gmail.com', 1, 1, '250 2.1.5 OK 6a1803df08f44-87bc35c4f4fsi47165466d6.1346 - gsmtp\r\n', 1, '183.83.198.66', NULL, 'valid', NULL),
(2, 1, 'naveenbgowda86@gmail.com', 'naveenbgowda86', 'gmail.com', 1, 1, '250 2.1.5 OK af79cd13be357-885f2538fb3si520434685a.1259 - gsmtp\r\n', 1, '183.83.198.66', NULL, 'valid', NULL),
(3, 1, 'naveenbgowda86766@gmail.com', 'naveenbgowda86766', 'gmail.com', 1, 0, '550-5.1.1 The email account that you tried to reach does not exist. Please try\r\n', 1, '183.83.198.66', NULL, 'invalid', NULL),
(4, 1, 'saralhrblr@gmail.com', 'saralhrblr', 'gmail.com', 1, 1, '250 2.1.5 OK 6a1803df08f44-87bc3566ee3si47993686d6.467 - gsmtp\r\n', 1, '203.192.210.211', NULL, 'valid', NULL),
(5, 1, 'ssurksha171@gmail.com', 'ssurksha171', 'gmail.com', 1, 0, '550-5.1.1 The email account that you tried to reach does not exist. Please try\r\n', 1, '13.203.20.26', NULL, 'invalid', NULL),
(6, 1, 'abc@gmail.com', 'abc', 'gmail.com', 1, 0, '550-5.1.1 The email account that you tried to reach does not exist. Please try\r\n', 1, '13.203.20.26', NULL, 'invalid', NULL),
(7, 1, 'pavitrauttur4734@gmail.com', 'pavitrauttur4734', 'gmail.com', 1, 1, '250 2.1.5 OK d75a77b69052e-4e881d4aff0si7511551cf.1263 - gsmtp\r\n', 1, '3.111.174.201', NULL, 'valid', NULL),
(8, 1, 'pavitra8768@gmail.com', 'pavitra8768', 'gmail.com', 1, 1, '250 2.1.5 OK 6a1803df08f44-87c012acb4esi6530926d6.1250 - gsmtp\r\n', 1, '3.111.174.201', NULL, 'valid', NULL),
(9, 1, 'apoorvaab8824@gmail.com', 'apoorvaab8824', 'gmail.com', 1, 1, '250 2.1.5 OK af79cd13be357-885f169f3f7si569504985a.611 - gsmtp\r\n', 1, '13.203.20.26', NULL, 'valid', NULL),
(10, 1, 'tejastar7@gmail.com', 'tejastar7', 'gmail.com', 1, 1, '250 2.1.5 OK 6a1803df08f44-87c01264f35si7379426d6.539 - gsmtp\r\n', 1, '13.203.20.26', NULL, 'valid', NULL),
(11, 1, 'aishwaryarelyon@gmail.com', 'aishwaryarelyon', 'gmail.com', 1, 1, '250 2.1.5 OK d75a77b69052e-4e881d4b0f2si8997881cf.1230 - gsmtp\r\n', 1, '13.203.20.26', NULL, 'valid', NULL),
(12, 1, 'tejasmysore38@gmail.com', 'tejasmysore38', 'gmail.com', 1, 1, '250 2.1.5 OK 6a1803df08f44-87c0129a5bdsi8051816d6.1125 - gsmtp\r\n', 1, '13.203.20.26', NULL, 'valid', NULL),
(13, 1, 'saralrelyon1@gmail.com', 'saralrelyon1', 'gmail.com', 1, 1, '250 2.1.5 OK af79cd13be357-88f3a15cd86si61868185a.1698 - gsmtp\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(14, 1, 'saralhrmpayroll@gmail.com', 'saralhrmpayroll', 'gmail.com', 1, 1, '250 2.1.5 OK af79cd13be357-88f390cdfe3si55317785a.890 - gsmtp\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(15, 1, 'kamalpreet24242@gmail.com', 'kamalpreet24242', 'gmail.com', 1, 1, '250 2.1.5 OK 6a1803df08f44-87c01206630si17276156d6.250 - gsmtp\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(16, 1, 'anandbj7@gmail.com', 'anandbj7', 'gmail.com', 1, 1, '250 2.1.5 OK af79cd13be357-88f39e72d60si57612485a.1588 - gsmtp\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(17, 1, 'rajeshramadoss@aastrazen.com', 'rajeshramadoss', 'aastrazen.com', 1, 1, '250 2.1.5 Recipient OK\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(18, 1, 'aayaakeximpvtltd@gmail.com', 'aayaakeximpvtltd', 'gmail.com', 1, 1, '250 2.1.5 OK d75a77b69052e-4e881d3b861si18018871cf.1123 - gsmtp\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(19, 1, 'careersabiramiengineering@gmail.com', 'careersabiramiengineering', 'gmail.com', 1, 1, '250 2.1.5 OK d75a77b69052e-4e88e116c0fsi9679991cf.696 - gsmtp\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(20, 1, 'attendancerkevents@gmail.com', 'attendancerkevents', 'gmail.com', 1, 1, '250 2.1.5 OK af79cd13be357-88f38fd8499si61076385a.862 - gsmtp\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(21, 1, 'pramod.kewat@adani.com', 'pramod.kewat', 'adani.com', 1, 1, '250 2.1.5 Recipient OK\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(22, 1, 'hr@adautomatos.com', 'hr', 'adautomatos.com', 1, 1, '250 2.1.5 Recipient OK\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(23, 1, 'sajith.nair@aerotransglobal.com', 'sajith.nair', 'aerotransglobal.com', 1, 1, '250 2.1.5 OK af79cd13be357-88f38af7f3fsi59765085a.451 - gsmtp\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(24, 1, 'chetanagarwal707@gmail.com', 'chetanagarwal707', 'gmail.com', 1, 1, '250 2.1.5 OK af79cd13be357-88f35c5c352si66629585a.71 - gsmtp\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(25, 1, 'sashinair@kalp.co.in', 'sashinair', 'kalp.co.in', 1, 1, '250 2.1.5 Recipient OK\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(26, 1, 'Bhawna.Tater@durr.com', 'Bhawna.Tater', 'durr.com', 1, 1, '250 recipient <Bhawna.Tater@durr.com> ok\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(27, 1, 'admin@aieze.in', 'admin', 'aieze.in', 1, 2, '451 4.7.1 Greylisted, try again after some time\r\n', 1, '13.200.40.182', NULL, 'retryable', NULL),
(28, 1, 'bhavita@aimtron.com', 'bhavita', 'aimtron.com', 1, 0, 'EHLO failed', 1, '13.200.40.182', NULL, 'invalid', NULL),
(29, 1, 'anshul.jain@alliedmed.co.in', 'anshul.jain', 'alliedmed.co.in', 1, 1, '250 recipient <anshul.jain@alliedmed.co.in> ok\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(30, 1, 'hr.alp@outlook.com', 'hr.alp', 'outlook.com', 1, 1, '250 2.1.5 Recipient OK\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(31, 1, 'accounts@altaher.in', 'accounts', 'altaher.in', 1, 1, '250 2.1.5 OK af79cd13be357-88f3a536ccfsi60887985a.1978 - gsmtp\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(32, 1, 'payroll.hr@amarradio.com', 'payroll.hr', 'amarradio.com', 1, 1, '250 2.1.5 Recipient OK\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(33, 1, 'hr@aquaengineers.in', 'hr', 'aquaengineers.in', 1, 1, '250 2.1.5 Recipient OK\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(34, 1, 'info@aquataurus.in', 'info', 'aquataurus.in', 1, 1, '250 recipient <info@aquataurus.in> ok\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(35, 1, 'hr@agarwalrocks.com', 'hr', 'agarwalrocks.com', 1, 1, '250 2.1.5 Recipient OK\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(36, 1, 'Hr.admin@ascendhsi.com', 'Hr.admin', 'ascendhsi.com', 1, 1, '250 2.1.5 OK af79cd13be357-88f3a539fd3si54446585a.2014 - gsmtp\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(37, 1, 'accounts@atcotowers.com', 'accounts', 'atcotowers.com', 1, 1, '250 2.1.5 OK d75a77b69052e-4e881d11062si20569721cf.476 - gsmtp\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(38, 1, 'hr@avprenewables.com', 'hr', 'avprenewables.com', 1, 1, '250 2.1.5 Recipient OK\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(39, 1, 'axiompharma@gmail.com', 'axiompharma', 'gmail.com', 1, 1, '250 2.1.5 OK af79cd13be357-88f3a81fd23si60602385a.2091 - gsmtp\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(40, 1, 'info@axisconcept.in', 'info', 'axisconcept.in', 1, 1, '250 2.1.5 Recipient OK\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(41, 1, 'cs@bakshis.in', 'cs', 'bakshis.in', 1, 1, '250 2.1.5 Recipient OK\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(42, 1, 'frontoffice@bbmpackaging.in', 'frontoffice', 'bbmpackaging.in', 1, 1, '250 recipient <frontoffice@bbmpackaging.in> ok\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(43, 1, 'siddharathsharma148@gmail.com', 'siddharathsharma148', 'gmail.com', 1, 1, '250 2.1.5 OK 6a1803df08f44-87c0126718esi19014446d6.313 - gsmtp\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(44, 1, 'hr.nsk@biolaxienzymes.com', 'hr.nsk', 'biolaxienzymes.com', 1, 1, '250 2.1.5 Recipient OK\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(45, 1, 'sriram@biosystems.in', 'sriram', 'biosystems.in', 1, 1, '250 2.1.5 Recipient OK\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(46, 1, 'ac.management@blossomhospitals.com', 'ac.management', 'blossomhospitals.com', 1, 1, '250 2.1.5 OK d75a77b69052e-4e8979984bbsi791291cf.59 - gsmtp\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(47, 1, 'hrbncppl@gmail.com', 'hrbncppl', 'gmail.com', 1, 1, '250 2.1.5 OK af79cd13be357-88f39c865bfsi67349985a.1531 - gsmtp\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(48, 1, 'buildrichac@gmail.com', 'buildrichac', 'gmail.com', 1, 1, '250 2.1.5 OK af79cd13be357-88f39e71a1fsi66101285a.1581 - gsmtp\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(49, 1, 'shashi.sharma@carmicfarms.com', 'shashi.sharma', 'carmicfarms.com', 1, 1, '250 2.1.5 OK af79cd13be357-88f35c5cc8bsi58969885a.95 - gsmtp\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(50, 1, 'payroll@casby.com', 'payroll', 'casby.com', 1, 1, '250 2.1.5 Recipient OK\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(51, 1, 'srikanth986@gmail.com', 'srikanth986', 'gmail.com', 1, 1, '250 2.1.5 OK d75a77b69052e-4e896b98f29si1325681cf.84 - gsmtp\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(52, 1, 'ces@chowgules.ac.in', 'ces', 'chowgules.ac.in', 1, 0, '550-5.1.1 The email account that you tried to reach does not exist. Please try\r\n', 1, '13.200.40.182', NULL, 'invalid', NULL),
(53, 1, 'Rahul@coffeeza.com', 'Rahul', 'coffeeza.com', 1, 1, '250 2.1.5 OK af79cd13be357-88f38af8fbfsi61148285a.443 - gsmtp\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(54, 1, 'karunakar.a@ckpcproperties.com', 'karunakar.a', 'ckpcproperties.com', 1, 1, '250 2.1.5 Recipient OK\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(55, 1, 'accounts.ind@cloudserv.ai', 'accounts.ind', 'cloudserv.ai', 1, 1, '250 2.1.5 Recipient OK\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(56, 1, 'cloudwiseinfotech@gmail.com', 'cloudwiseinfotech', 'gmail.com', 1, 1, '250 2.1.5 OK 6a1803df08f44-87c012831b8si17786026d6.733 - gsmtp\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(57, 1, 'hrcmhshimoga@gmail.com', 'hrcmhshimoga', 'gmail.com', 1, 1, '250 2.1.5 OK d75a77b69052e-4e8934604b9si4212311cf.1457 - gsmtp\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(58, 1, 'cmtartsindia@gmail.com', 'cmtartsindia', 'gmail.com', 1, 1, '250 2.1.5 OK af79cd13be357-88f3a253188si59233485a.1724 - gsmtp\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(59, 1, 'Hema.gehani@yahoo.co.in', 'Hema.gehani', 'yahoo.co.in', 1, 1, '250 recipient <hema.gehani@yahoo.co.in> ok\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(60, 1, 'admin@cottageindustries.co.in', 'admin', 'cottageindustries.co.in', 1, 1, '250 2.1.5 Ok\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(61, 1, 'robinv@compupacific.com', 'robinv', 'compupacific.com', 1, 1, '250 Accepted\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(62, 1, 'hr@creative-group.co.in', 'hr', 'creative-group.co.in', 1, 0, 'SMTP banner not ready', 1, '13.200.40.182', NULL, 'invalid', NULL),
(63, 1, 'Vaishnavi.r@chanakyauniversity.edu.in', 'Vaishnavi.r', 'chanakyauniversity.edu.in', 1, 1, '250 2.1.5 Recipient OK\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(64, 1, 'dci.travel@danieli-corus.com', 'dci.travel', 'danieli-corus.com', 1, 1, '250 2.1.5 Recipient OK\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(65, 1, 'info@dbyte-facility.com', 'info', 'dbyte-facility.com', 1, 1, '250 2.1.5 Recipient OK\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(66, 1, 'narayana.rock@outlook.com', 'narayana.rock', 'outlook.com', 1, 1, '250 2.1.5 Recipient OK\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(67, 1, 'rahul.shivam@demandai.co', 'rahul.shivam', 'demandai.co', 1, 1, '250 2.1.5 Recipient OK\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(68, 1, 'hr@dhyandishes.com', 'hr', 'dhyandishes.com', 1, 1, '250 2.1.5 <hr@dhyandishes.com> recipient ok\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(69, 1, 'hr@dudhshreemilk.com', 'hr', 'dudhshreemilk.com', 1, 1, '250 2.1.5 Ok\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(70, 1, 'b.uttam@dnreindia.com', 'b.uttam', 'dnreindia.com', 1, 1, '250 2.1.5 OK 6a1803df08f44-87c012ada06si18034096d6.1393 - gsmtp\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(71, 1, 'itsupport@ecoair.co.in', 'itsupport', 'ecoair.co.in', 1, 1, '250 2.1.5 Recipient OK\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(72, 1, 'hr@ecosoch.com', 'hr', 'ecosoch.com', 1, 1, '250 2.1.5 OK 6a1803df08f44-87c012ad8c8si15790786d6.1381 - gsmtp\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(73, 1, 'ravi@edunetfoundation.org', 'ravi', 'edunetfoundation.org', 1, 1, '250 2.1.5 Recipient OK\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(74, 1, 'anurag.csd@relyonsoft.com', 'anurag.csd', 'relyonsoft.com', 1, 0, 'SMTP banner not ready', 1, '13.200.40.182', NULL, 'invalid', NULL),
(75, 1, 'hr@euvbusinessservices.com', 'hr', 'euvbusinessservices.com', 1, 1, '250 2.1.5 OK af79cd13be357-88f394b34f5si61169685a.1060 - gsmtp\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(76, 1, 'balakrishna.torne@exprivia.asia', 'balakrishna.torne', 'exprivia.asia', 1, 1, '250 2.1.5 Recipient OK\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(77, 1, 'gs@felixadvisory.com', 'gs', 'felixadvisory.com', 1, 1, '250 2.1.5 Recipient OK\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(78, 1, 'info@garg-enterprises.com', 'info', 'garg-enterprises.com', 1, 0, '550 5.5.1 Protocol error\r\n', 1, '13.200.40.182', NULL, 'invalid', NULL),
(79, 1, 'Ghanshyam.rawat@gemfields.com', 'Ghanshyam.rawat', 'gemfields.com', 1, 1, '250 Recipient OK [KmTfSj3LNaiQmnsPHbr1yg.uk216]\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(80, 1, 'jayashree.joshy@hotwireglobal.com', 'jayashree.joshy', 'hotwireglobal.com', 1, 1, '250 Recipient OK [qNHms4nwNbW2_5tlqiNCEg.au2]\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(81, 1, 'ACCOUNT@GLACISGLOBAL.COM', 'ACCOUNT', 'GLACISGLOBAL.COM', 1, 0, 'EHLO failed', 1, '13.200.40.182', NULL, 'invalid', NULL),
(82, 1, 'Vinutha.k@glastronix.com', 'Vinutha.k', 'glastronix.com', 1, 1, '250 2.1.5 OK 6a1803df08f44-87c17ae8748si1706166d6.643 - gsmtp\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(83, 1, 'hrd@crystalsfacilities.in', 'hrd', 'crystalsfacilities.in', 1, 1, '250 Recipient <hrd@crystalsfacilities.in> OK\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(84, 1, 'vijay@greenplanetindia.com', 'vijay', 'greenplanetindia.com', 1, 1, '250 2.1.5 OK 6a1803df08f44-87c01b13e7bsi15706696d6.1147 - gsmtp\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(85, 1, 'mohit@gfgc.com', 'mohit', 'gfgc.com', 1, 1, '250 2.1.5 Recipient OK\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(86, 1, 'fc-gsfdc-vdr@gujarat.gov.in', 'fc-gsfdc-vdr', 'gujarat.gov.in', 1, 0, 'MAIL FROM rejected', 1, '13.200.40.182', NULL, 'invalid', NULL),
(87, 1, 'anil.m.patil@gsmanitsolutions.co.in', 'anil.m.patil', 'gsmanitsolutions.co.in', 1, 1, '250 2.1.5 OK d75a77b69052e-4e881d596d3si19981941cf.1438 - gsmtp\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(88, 1, 'accounts@harvestlinkexports.com', 'accounts', 'harvestlinkexports.com', 1, 1, '250 2.1.5 Recipient OK\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(89, 1, 'sheetal@hensex.com', 'sheetal', 'hensex.com', 1, 1, '250 2.1.5 OK af79cd13be357-88f38af813csi65345085a.642 - gsmtp\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(90, 1, 'pbpune@gmail.com', 'pbpune', 'gmail.com', 1, 1, '250 2.1.5 OK 6a1803df08f44-87c01202046si18624086d6.268 - gsmtp\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(91, 1, 'hr@hnsafal.com', 'hr', 'hnsafal.com', 1, 1, '250 2.1.5 OK af79cd13be357-88f397a3238si66633385a.1290 - gsmtp\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(92, 1, 'finance.india@hhaexchange.com', 'finance.india', 'hhaexchange.com', 1, 1, '250 Recipient OK [l8dWdtdyNvaX7vLNSLAq6Q.us186]\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(93, 1, 'hrteam@rosebazaar.in', 'hrteam', 'rosebazaar.in', 1, 1, '250 2.1.5 OK af79cd13be357-88f3a53855bsi59618085a.1942 - gsmtp\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(94, 1, 'prabhu.m@rockworthindia.com', 'prabhu.m', 'rockworthindia.com', 1, 1, '250 Accepted\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(95, 1, 'Prasad.B@innvolution.com', 'Prasad.B', 'innvolution.com', 1, 1, '250 2.1.5 Recipient OK\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(96, 1, 'hr@industrialhandling.in', 'hr', 'industrialhandling.in', 1, 0, 'EHLO failed', 1, '13.200.40.182', NULL, 'invalid', NULL),
(97, 1, 'accounts@iihmrbangalore.edu.in', 'accounts', 'iihmrbangalore.edu.in', 1, 1, '250 2.1.5 Recipient OK\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(98, 1, 'Zoho.admin@innvolution.com', 'Zoho.admin', 'innvolution.com', 1, 1, '250 2.1.5 Recipient OK\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(99, 1, 'niketapandey@imcbusiness.com', 'niketapandey', 'imcbusiness.com', 1, 1, '250 2.1.5 OK 6a1803df08f44-87c01201fa5si17786806d6.1 - gsmtp\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(100, 1, 'finance@indiantravelhouse.com', 'finance', 'indiantravelhouse.com', 1, 1, '250 2.1.5 OK af79cd13be357-88f3a441748si62161685a.1871 - gsmtp\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(101, 1, 'hr@indoasiatours.com', 'hr', 'indoasiatours.com', 1, 1, '250 2.1.5 Recipient OK\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(102, 1, 'hr@indoimpex.com', 'hr', 'indoimpex.com', 1, 1, '250 2.1.5 OK af79cd13be357-88f395ad665si61053685a.1208 - gsmtp\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(103, 1, 'hrmanager.sawarda@insolationenergy.in', 'hrmanager.sawarda', 'insolationenergy.in', 1, 1, '250 2.1.5 Recipient OK\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(104, 1, 'info@isteplskills.co.in', 'info', 'isteplskills.co.in', 1, 1, '250 2.1.5 OK d75a77b69052e-4e881d4aa44si19139811cf.1284 - gsmtp\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(105, 1, 'hr@jagsonpal.co.in', 'hr', 'jagsonpal.co.in', 1, 1, '250 2.1.5 Recipient OK\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(106, 1, 'jobcornerpune@ymail.com', 'jobcornerpune', 'ymail.com', 1, 1, '250 recipient <jobcornerpune@ymail.com> ok\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(107, 1, 'operations@jrrsafelogic.com', 'operations', 'jrrsafelogic.com', 1, 1, '250 2.1.5 Recipient OK\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(108, 1, 'fmtechnoassociates@gmail.com', 'fmtechnoassociates', 'gmail.com', 1, 1, '250 2.1.5 OK 6a1803df08f44-87c012003b1si18874686d6.169 - gsmtp\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(109, 1, 'hr@jsawebsolutions.com', 'hr', 'jsawebsolutions.com', 1, 1, '250 2.1.5 OK a640c23a62f3a-b5cccfa98b4si287159066b.342 - gsmtp\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(110, 1, 'kisah.hrms@kisah.in', 'kisah.hrms', 'kisah.in', 1, 1, '250 2.1.5 Recipient OK\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(111, 1, 'chandukee@gmail.com', 'chandukee', 'gmail.com', 1, 1, '250 2.1.5 OK 6a1803df08f44-87c01297558si16735416d6.1056 - gsmtp\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(112, 1, 'admin.india@kemppi.com', 'admin.india', 'kemppi.com', 1, 1, '250 2.1.5 Recipient OK\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(113, 1, 'cas@knavcpa.com', 'cas', 'knavcpa.com', 1, 1, '250 2.1.5 Recipient OK\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(114, 1, 'info@bizhrsolutions.com', 'info', 'bizhrsolutions.com', 1, 1, '250 2.1.5 Recipient OK\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(115, 1, 'info@ksdglobal.com', 'info', 'ksdglobal.com', 1, 1, '250 2.1.5 Recipient OK\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(116, 1, 'lalit_jain007@yahoo.co.in', 'lalit_jain007', 'yahoo.co.in', 1, 1, '250 recipient <lalit_jain007@yahoo.co.in> ok\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(117, 1, 'linksair@linksin.com', 'linksair', 'linksin.com', 1, 1, '250 recipient <linksair@linksin.com> ok\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(118, 1, 'saaliaisonoffice@gmail.com', 'saaliaisonoffice', 'gmail.com', 1, 1, '250 2.1.5 OK 6a1803df08f44-87c012674e0si19492646d6.328 - gsmtp\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(119, 1, 'hr.ind@malca-amit.com', 'hr.ind', 'malca-amit.com', 1, 1, '250 2.1.5 Recipient OK\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(120, 1, 'sanjayjaya8140@gmail.com', 'sanjayjaya8140', 'gmail.com', 1, 1, '250 2.1.5 OK af79cd13be357-88f3a441e1bsi56882685a.1886 - gsmtp\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(121, 1, 'hrd@mdfc.in', 'hrd', 'mdfc.in', 1, 1, '250 OK\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(122, 1, 'salemechcon@gmail.com', 'salemechcon', 'gmail.com', 1, 1, '250 2.1.5 OK 6a1803df08f44-87c01266bc2si16310876d6.537 - gsmtp\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(123, 1, 'chandrasekar.n@megarubbertech.com', 'chandrasekar.n', 'megarubbertech.com', 1, 1, '250 2.1.5 Recipient OK\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(124, 1, 'contact@magnalisfoods.com', 'contact', 'magnalisfoods.com', 1, 0, '550-5.1.1 The email account that you tried to reach does not exist. Please try\r\n', 1, '13.200.40.182', NULL, 'invalid', NULL),
(125, 1, 'shilpas@microahc.com', 'shilpas', 'microahc.com', 1, 0, 'SMTP banner not ready', 1, '13.200.40.182', NULL, 'invalid', NULL),
(126, 1, 'hrd@milgroup.in', 'hrd', 'milgroup.in', 1, 1, '250 2.1.5 Recipient OK\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(127, 1, 'accounts.ind@mushroom.solutions', 'accounts.ind', 'mushroom.solutions', 1, 1, '250 2.1.5 Recipient OK\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(128, 1, 'payroll@hcigroup.com.au', 'payroll', 'hcigroup.com.au', 1, 1, '250 2.1.5 Recipient OK\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(129, 1, 'krishnakishore@nasahospitals.com', 'krishnakishore', 'nasahospitals.com', 1, 1, '250 2.1.5 <krishnakishore@nasahospitals.com> recipient ok\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(130, 1, 'Dhaval.pandya@neohealth.com.au', 'Dhaval.pandya', 'neohealth.com.au', 1, 1, '250 2.1.5 Recipient OK\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(131, 1, 'ajit.kumar@netsoftit.com', 'ajit.kumar', 'netsoftit.com', 1, 1, '250 2.1.5 Recipient OK\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(132, 1, 'aneuropolis24@gmail.com', 'aneuropolis24', 'gmail.com', 1, 1, '250 2.1.5 OK 6a1803df08f44-87c01264df7si17898186d6.592 - gsmtp\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(133, 1, 'hr@nivicap.com', 'hr', 'nivicap.com', 1, 1, '250 2.1.5 Recipient OK\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(134, 1, 'neworbitenterprises@gmail.com', 'neworbitenterprises', 'gmail.com', 1, 1, '250 2.1.5 OK d75a77b69052e-4e88f550fa7si9063641cf.526 - gsmtp\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(135, 1, 'hr@novobliss.in', 'hr', 'novobliss.in', 1, 1, '250 2.1.5 Recipient OK\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(136, 1, 'Akash.singh@novoinvent.com', 'Akash.singh', 'novoinvent.com', 1, 1, '250 2.1.5 Ok\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(137, 1, 'info@npsvibhuthipura.com', 'info', 'npsvibhuthipura.com', 1, 1, '250 2.1.5 Recipient OK\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(138, 1, 'naliniparabathula@nyqewealth.com', 'naliniparabathula', 'nyqewealth.com', 1, 0, 'Connect failed to 160.153.0.155: Connection timed out', 1, '13.200.40.182', NULL, 'invalid', NULL),
(139, 1, 'hr@occgroups.com', 'hr', 'occgroups.com', 1, 1, '250 2.1.5 OK af79cd13be357-88f3a441e3bsi65437085a.1857 - gsmtp\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(140, 1, 'ca@omgene.com', 'ca', 'omgene.com', 1, 1, '250 ok\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(141, 1, 'bhojraj.ayer@parksyde.com', 'bhojraj.ayer', 'parksyde.com', 1, 1, '250 2.1.5 Recipient OK\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(142, 1, 'pashankaracc2014@gmail.com', 'pashankaracc2014', 'gmail.com', 1, 1, '250 2.1.5 OK 6a1803df08f44-87c012b10d2si15967296d6.1467 - gsmtp\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(143, 1, 'suketu.p@pentadconsulting.com', 'suketu.p', 'pentadconsulting.com', 1, 0, '550 5.5.1 Protocol error\r\n', 1, '13.200.40.182', NULL, 'invalid', NULL),
(144, 1, 'sf@pgindialogistics.com', 'sf', 'pgindialogistics.com', 1, 1, '250 2.1.5 OK af79cd13be357-88f3a441159si62493685a.1820 - gsmtp\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(145, 1, 'plusmarkhrassociates@gmail.com', 'plusmarkhrassociates', 'gmail.com', 1, 1, '250 2.1.5 OK 6a1803df08f44-87c01201eb2si17515516d6.2 - gsmtp\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(146, 1, 'isharekhi07@gmail.com', 'isharekhi07', 'gmail.com', 1, 1, '250 2.1.5 OK d75a77b69052e-4e881d263f2si20250301cf.638 - gsmtp\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(147, 1, 'ptlpatnacityhr@gmail.com', 'ptlpatnacityhr', 'gmail.com', 1, 1, '250 2.1.5 OK af79cd13be357-88f39f6f4e2si71536785a.1638 - gsmtp\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(148, 1, 'hr@theclarkscollection.com', 'hr', 'theclarkscollection.com', 1, 1, '250 2.1.5 OK af79cd13be357-88f3a5379aesi59047585a.1986 - gsmtp\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(149, 1, 'info@prozealgreen.com', 'info', 'prozealgreen.com', 1, 1, '250 2.1.5 Recipient OK\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(150, 1, 'SHAWN@QUALIS1INC.COM', 'SHAWN', 'QUALIS1INC.COM', 1, 1, '250 2.1.5 OK af79cd13be357-88f3a442503si66135385a.1930 - gsmtp\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(151, 1, 'Itsupport@rajanissan.com', 'Itsupport', 'rajanissan.com', 1, 1, '250 2.1.5 <itsupport@rajanissan.com> recipient ok\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(152, 1, 'praveenkumar.nerella@rassense.com', 'praveenkumar.nerella', 'rassense.com', 1, 1, '250 2.1.5 Recipient OK\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(153, 1, 'Swethabelagodu@rbihub.in', 'Swethabelagodu', 'rbihub.in', 1, 1, '250 2.1.5 Recipient OK\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(154, 1, 'hr@radikchemicals.com', 'hr', 'radikchemicals.com', 1, 1, '250 Accepted\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(155, 1, 'manikrishnan@renergyservices.in', 'manikrishnan', 'renergyservices.in', 1, 1, '250 2.1.5 <manikrishnan@renergyservices.in> recipient ok\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(156, 1, 'param@roboteon.in', 'param', 'roboteon.in', 1, 1, '250 Recipient <param@roboteon.in> OK\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(157, 1, 'hrms@ronakoptik.com', 'hrms', 'ronakoptik.com', 1, 1, '250 2.1.5 Recipient OK\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(158, 1, 'sundareshwaran.s@relyonsoft.com', 'sundareshwaran.s', 'relyonsoft.com', 1, 0, 'SMTP banner not ready', 1, '13.200.40.182', NULL, 'invalid', NULL),
(159, 1, 'samruddhbpl@gmail.com', 'samruddhbpl', 'gmail.com', 1, 1, '250 2.1.5 OK 6a1803df08f44-87c012b0da1si17923076d6.1443 - gsmtp\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(160, 1, 'pavan.a@sangeethamobiles.com', 'pavan.a', 'sangeethamobiles.com', 1, 1, '250 2.1.5 Recipient OK\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(161, 1, 'sanjaysingh.csd@relyonsoft.com', 'sanjaysingh.csd', 'relyonsoft.com', 1, 0, 'SMTP banner not ready', 1, '13.200.40.182', NULL, 'invalid', NULL),
(162, 1, 'nagashayana@savvvyy.com', 'nagashayana', 'savvvyy.com', 1, 1, '250 2.1.5 Recipient OK\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(163, 1, 'sbhsvadodara@gmail.com', 'sbhsvadodara', 'gmail.com', 1, 1, '250 2.1.5 OK d75a77b69052e-4e881d452easi17379151cf.1171 - gsmtp\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(164, 1, 'hr@sborganicsltd.com', 'hr', 'sborganicsltd.com', 1, 1, '250 2.1.5 OK 6a1803df08f44-87c012bd6f1si15643536d6.1533 - gsmtp\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(165, 1, 'sagar@sdg.in', 'sagar', 'sdg.in', 1, 1, '250 2.1.5 Recipient OK\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(166, 1, 'dl-SSG_indiafinanceteam@foundryco.com', 'dl-SSG_indiafinanceteam', 'foundryco.com', 1, 1, '250 Recipient OK [R03RZeW6Po28qjYUrh2RBg.usb29]\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(167, 1, 'corporate-governance@shaktigroupindia.in', 'corporate-governance', 'shaktigroupindia.in', 1, 1, '250 2.1.5 OK af79cd13be357-88fce3a86dcsi10836885a.630 - gsmtp\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(168, 1, 'admin@squirrelhomedesigns.com', 'admin', 'squirrelhomedesigns.com', 1, 1, '250 2.1.5 OK af79cd13be357-88f390cfb9esi63265185a.953 - gsmtp\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(169, 1, 'shivcommunications2011@gmail.com', 'shivcommunications2011', 'gmail.com', 1, 1, '250 2.1.5 OK af79cd13be357-88f39994a9esi71710685a.1358 - gsmtp\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(170, 1, 'tejaslalka@kalp.co.in', 'tejaslalka', 'kalp.co.in', 1, 1, '250 2.1.5 Recipient OK\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(171, 1, 'finance@skill-mine.com', 'finance', 'skill-mine.com', 1, 1, '250 2.1.5 Recipient OK\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(172, 1, 'hr@skunitech.com', 'hr', 'skunitech.com', 1, 0, '550 5.5.1 Protocol error\r\n', 1, '13.200.40.182', NULL, 'invalid', NULL),
(173, 1, 'admin@skylinetelesolutions.com', 'admin', 'skylinetelesolutions.com', 1, 1, '250 Accepted\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(174, 1, 'sachin@skysurge.in', 'sachin', 'skysurge.in', 1, 1, '250 2.1.5 Recipient OK\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(175, 1, 'finance@sreepathilab.com', 'finance', 'sreepathilab.com', 1, 1, '250 2.1.5 Recipient OK\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(176, 1, 'manjushree@slsxpress.com', 'manjushree', 'slsxpress.com', 1, 1, '250 2.1.5 OK d75a77b69052e-4e881c43aa8si17631421cf.241 - gsmtp\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(177, 1, 'mysmfin@gmail.com', 'mysmfin', 'gmail.com', 1, 1, '250 2.1.5 OK af79cd13be357-88f38af6b7csi63500285a.479 - gsmtp\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(178, 1, 'snbsofttechsolutions@gmail.com', 'snbsofttechsolutions', 'gmail.com', 1, 1, '250 2.1.5 OK af79cd13be357-88f3a063a17si67195385a.1633 - gsmtp\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(179, 1, 'vesparo.OpsHead@outlook.com', 'vesparo.OpsHead', 'outlook.com', 1, 1, '250 2.1.5 Recipient OK\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(180, 1, 'sales@spicenest.in', 'sales', 'spicenest.in', 1, 1, '250 2.1.5 OK 6a1803df08f44-87c112b3a11si4403816d6.1412 - gsmtp\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(181, 1, 'spenterprises5522@gmail.com', 'spenterprises5522', 'gmail.com', 1, 1, '250 2.1.5 OK af79cd13be357-88f3a440500si59272085a.1889 - gsmtp\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(182, 1, 'sumitchetty@gmail.com', 'sumitchetty', 'gmail.com', 1, 1, '250 2.1.5 OK af79cd13be357-88f390d073dsi71061185a.870 - gsmtp\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(183, 1, 'admin@sumerurealty.com', 'admin', 'sumerurealty.com', 1, 1, '250 Recipient <admin@sumerurealty.com> OK\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(184, 1, 'accounts@ssrvm.org', 'accounts', 'ssrvm.org', 1, 1, '250 2.1.5 OK d75a77b69052e-4e881d25c87si17365191cf.651 - gsmtp\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(185, 1, 'it@stellarix.com', 'it', 'stellarix.com', 1, 1, '250 2.1.5 OK af79cd13be357-88f396a9f9dsi70577485a.1238 - gsmtp\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(186, 1, 'hr@stoneandacres.com', 'hr', 'stoneandacres.com', 1, 1, '250 2.1.5 OK d75a77b69052e-4e881d26cf0si17074971cf.747 - gsmtp\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(187, 1, 'hr@suntriaenergy.com', 'hr', 'suntriaenergy.com', 1, 1, '250 Requested mail action okay, completed\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(188, 1, 'operations@synergasindustries.com', 'operations', 'synergasindustries.com', 1, 1, '250 2.1.5 OK af79cd13be357-88f3a539a02si58061185a.1945 - gsmtp\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(189, 1, 'adityashah34@gmail.com', 'adityashah34', 'gmail.com', 1, 1, '250 2.1.5 OK 6a1803df08f44-87c070c586esi11553786d6.1120 - gsmtp\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(190, 1, 'info@techproindia.com', 'info', 'techproindia.com', 1, 1, '250 2.1.5 OK af79cd13be357-88f3a441448si57426585a.1843 - gsmtp\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(191, 1, 'bhushan@temere.net', 'bhushan', 'temere.net', 1, 1, '250 2.1.5 Recipient OK\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(192, 1, 'tpri.it@tpr-global.com', 'tpri.it', 'tpr-global.com', 1, 1, '250 recipient <tpri.it@tpr-global.com> ok\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(193, 1, 'ajpltribe@gmail.com', 'ajpltribe', 'gmail.com', 1, 1, '250 2.1.5 OK 6a1803df08f44-87c012ae0e4si18461946d6.1424 - gsmtp\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(194, 1, 'hrmgr@golkondaresorts.com', 'hrmgr', 'golkondaresorts.com', 1, 1, '250 2.1.5 Recipient OK\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(195, 1, 'shabbirmadraswala@gmail.com', 'shabbirmadraswala', 'gmail.com', 1, 1, '250 2.1.5 OK af79cd13be357-88f39e71987si61574385a.1562 - gsmtp\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(196, 1, 'info@vapharmapack.com', 'info', 'vapharmapack.com', 1, 1, '250 2.1.5 OK 6a1803df08f44-87c0129ad17si19642886d6.1129 - gsmtp\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(197, 1, 'saralcloudsolutions@gmail.com', 'saralcloudsolutions', 'gmail.com', 1, 1, '250 2.1.5 OK d75a77b69052e-4e88f550fa7si9060841cf.526 - gsmtp\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(198, 1, 'dipalpanchal@vasuhealthcare.com', 'dipalpanchal', 'vasuhealthcare.com', 1, 1, '250 2.1.5 Recipient OK\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(199, 1, 'htrivedi3@gmail.com', 'htrivedi3', 'gmail.com', 1, 1, '250 2.1.5 OK d75a77b69052e-4e881d269cbsi18433101cf.641 - gsmtp\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(200, 1, 'amit@vihaancleangreen.com', 'amit', 'vihaancleangreen.com', 1, 1, '250 2.1.5 Recipient OK\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(201, 1, 'dasan_d@rediffmail.com', 'dasan_d', 'rediffmail.com', 1, 1, '250 ok\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(202, 1, 'visionguruindia001@gmail.com', 'visionguruindia001', 'gmail.com', 1, 1, '250 2.1.5 OK af79cd13be357-88f38af7eaasi59060485a.577 - gsmtp\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(203, 1, 'hr@vrmaritime.net', 'hr', 'vrmaritime.net', 1, 1, '250 2.1.5 Recipient OK\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(204, 1, 'himansu@vrxlab.com', 'himansu', 'vrxlab.com', 1, 0, '550 5.5.4 ETP210 Your DNS [ \"server.payrollsoft.in\" ] is listed by Spamhaus. Please see http://www.spamhaus.org/query/domain/ if you feel this is in error - 3z31ZLj-50899-09b851032754BEF80F86a320f45\r\n', 1, '13.200.40.182', NULL, 'invalid', NULL),
(205, 1, 'coordinator@3lsolutions.in', 'coordinator', '3lsolutions.in', 1, 1, '250 2.1.5 OK 5b1f17b1804b1-471144420aasi1566455e9.49 - gsmtp\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(206, 1, 'sanjiv@wisetime.in', 'sanjiv', 'wisetime.in', 1, 1, '250 2.1.5 OK 6a1803df08f44-87c01267162si17142496d6.373 - gsmtp\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(207, 1, 'satheesh.k@wisseninfotech.com', 'satheesh.k', 'wisseninfotech.com', 1, 1, '250 2.1.5 Recipient OK\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(208, 1, 'payroll@worldcourier.co.in', 'payroll', 'worldcourier.co.in', 1, 1, '250 2.1.5 Recipient ok\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(209, 1, 'sudhakar.kvrk@xcentium.com', 'sudhakar.kvrk', 'xcentium.com', 1, 1, '250 2.1.5 Recipient OK\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(210, 1, 'accounts@xime.org', 'accounts', 'xime.org', 1, 1, '250 2.1.5 OK af79cd13be357-88f35c5bf6fsi61752385a.339 - gsmtp\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(211, 1, 'finance@xylopialabs.com', 'finance', 'xylopialabs.com', 1, 1, '250 2.1.5 Recipient OK\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(212, 1, 'accounts@zealousweb.com', 'accounts', 'zealousweb.com', 1, 1, '250 2.1.5 OK af79cd13be357-88f391c8f62si63231685a.1009 - gsmtp\r\n', 1, '13.200.40.182', NULL, 'valid', NULL),
(213, 1, 'raviranjanpandeyji@gmail.com', 'raviranjanpandeyji', 'gmail.com', 1, 1, '250 2.1.5 OK af79cd13be357-88f38fd93d0si76628285a.871 - gsmtp\r\n', 1, '203.192.210.211', NULL, 'valid', NULL),
(214, 1, 'admin@aieze1.in', 'admin', 'aieze1.in', 1, 0, 'No valid MX or A records found for SMTP', 1, '183.83.198.66', NULL, 'invalid', NULL),
(215, 1, 'raviranjanpandeyji1@gmail.com', 'raviranjanpandeyji1', 'gmail.com', 1, 0, '550-5.1.1 The email account that you tried to reach does not exist. Please try\r\n', 1, '183.83.198.66', NULL, 'invalid', NULL),
(216, 1, 'poojitha.kk@relyonsoft.com', 'poojitha.kk', 'relyonsoft.com', 1, 1, '109.203.124.121', 0, '13.234.41.242', NULL, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `emails`
--
ALTER TABLE `emails`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_emails_csvlist` (`csv_list_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `emails`
--
ALTER TABLE `emails`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=217;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `emails`
--
ALTER TABLE `emails`
  ADD CONSTRAINT `fk_emails_csvlist` FOREIGN KEY (`csv_list_id`) REFERENCES `csv_list` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
