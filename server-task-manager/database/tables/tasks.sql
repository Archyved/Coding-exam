DROP TABLE IF EXISTS `tasks`;
CREATE TABLE `tasks`(
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(50) NOT NULL,
  statusCompleted BOOLEAN DEFAULT FALSE
);