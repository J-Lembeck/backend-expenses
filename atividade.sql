SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;


CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `description` varchar(255) NOT NULL,
  `expenseId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `categories` (`id`, `description`, `expenseId`) VALUES
(1, 'Aluguel', NULL),
(2, 'Educação', NULL),
(3, 'Combustível', NULL);

CREATE TABLE `expenses` (
  `id` int(11) NOT NULL,
  `category_id` int(11) DEFAULT NULL,
  `value` decimal(10,0) NOT NULL,
  `description` varchar(255) NOT NULL,
  `period` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `expenses` (`id`, `category_id`, `value`, `description`, `period`) VALUES
(1, 1, '200', 'Gasto com aluguel', '2023-04-27 00:00:00'),
(2, 2, '1200', 'Gasto com faculdade', '2023-04-24 00:00:00'),
(3, 3, '50', 'Gasto com gasolina', '2023-04-15 00:00:00');


ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`),
  ADD KEY `categories_expenseId_foreign_idx` (`expenseId`);

ALTER TABLE `expenses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`);


ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

ALTER TABLE `expenses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;


ALTER TABLE `categories`
  ADD CONSTRAINT `categories_expenseId_foreign_idx` FOREIGN KEY (`expenseId`) REFERENCES `expenses` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

ALTER TABLE `expenses`
  ADD CONSTRAINT `expenses_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
