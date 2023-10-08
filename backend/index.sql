
--
-- Database: `db-contactinfo`
--

CREATE DATABASE IF NOT EXISTS `db-contactinfo` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `db-contactinfo`;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_contactinfo`
--

DROP TABLE IF EXISTS `tbl_contactinfo`;
CREATE TABLE `tbl_contactinfo` (
  `id` int(11) NOT NULL,
  `fldName` varchar(50) NOT NULL,
  `fldEmail` varchar(150) NOT NULL,
  `fldMessage` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_contactinfo`
--
ALTER TABLE `tbl_contactinfo`
 ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_contactinfo`
--
ALTER TABLE `tbl_contactinfo`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;