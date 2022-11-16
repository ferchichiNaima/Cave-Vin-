-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mer. 27 avr. 2022 à 17:00
-- Version du serveur : 10.4.22-MariaDB
-- Version de PHP : 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `db_vin`
--

-- --------------------------------------------------------

--
-- Structure de la table `hibernate_sequence`
--

CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `hibernate_sequence`
--

INSERT INTO `hibernate_sequence` (`next_val`) VALUES
(47);

-- --------------------------------------------------------

--
-- Structure de la table `producteur`
--

CREATE TABLE `producteur` (
  `id` bigint(20) NOT NULL,
  `idcompte` bigint(20) DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `numero_fiscal` bigint(20) DEFAULT NULL,
  `regionviticole` varchar(255) DEFAULT NULL,
  `telephone` bigint(20) DEFAULT NULL,
  `ville` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `producteur`
--

INSERT INTO `producteur` (`id`, `idcompte`, `nom`, `numero_fiscal`, `regionviticole`, `telephone`, `ville`) VALUES
(43, 30, 'Château Comtesse du Parc ', 634275698642, 'Région Bordeaux', 622663287, 'Saint-Estèphe'),
(42, 32, 'Domaine du Mas des Tines ', 54678354987, ' Région Bourgogne', 650100196, 'Saint-Amour-Bellevue'),
(44, 1, 'Château de la Rose Sarron', 45628961459, 'Région Bordeaux', 767342287, 'Langon'),
(46, 45, 'Polytech', 98736475816, 'Région Loire', 898762722, 'Angers');

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `email_id` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `user_name` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `email_id`, `password`, `user_name`) VALUES
(30, 'sirine.ferchichi@gmail.com', 'Naima', 'Naima'),
(32, 'derin@gmail.com', 'derin', 'Derin'),
(1, 'admin@gmail.com', 'admin', 'admin'),
(45, 'polytech@gmail.com', 'test', 'polytechSAGI');

-- --------------------------------------------------------

--
-- Structure de la table `vins`
--

CREATE TABLE `vins` (
  `id` bigint(20) NOT NULL,
  `appelation` varchar(255) DEFAULT NULL,
  `couleur` varchar(255) DEFAULT NULL,
  `cepage` varchar(255) DEFAULT NULL,
  `contenance` double DEFAULT NULL,
  `degre_alcool` double DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `prix` double DEFAULT NULL,
  `id_compte` bigint(20) NOT NULL,
  `region` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `vins`
--

INSERT INTO `vins` (`id`, `appelation`, `couleur`, `cepage`, `contenance`, `degre_alcool`, `description`, `prix`, `id_compte`, `region`) VALUES
(129, 'Bourgogne', 'Rouge', 'Pinot noir ', 75, 13, 'Couleur pourpre, intense, reflets pourpres. Boisé, intense, arômes de réglisse, arômes de pruneau, arômes d\'amande, arômes de fruits à noyau, subtile arômes de chêne.', 9.9, 32, ' Région Bourgogne'),
(130, 'Haut-Médoc AOP', 'Rouge', 'Cabernet Sauvignon-Merlot', 75, 13.5, 'Couleur rubis, éclatante, reflets pourpres. Expressif, frais, intense arômes de fruits rouges, arômes de chêne.', 14, 30, 'Région Bordeaux'),
(135, 'Bordeaux AOP', 'Rouge', 'Cabernet Sauvignon - Merlot', 75, 13.5, 'Bon vin.', 15, 1, 'Région Bordeaux'),
(136, 'Loire AOP', 'Rouge', 'Cabernet Sauvignon - Merlot', 100, 13, 'Vin de Polytech Angers', 10, 45, 'Région Loire'),
(132, 'Bordeaux AOP', 'Rosé', 'Cabernet Sauvignon - Merlot', 75, 12.5, 'Culture conventionnelle, Vendanges mécaniques, Egrappage total, Fermentation en cuve inox thermo-régulée, Pressurage, Elevage en cuve inox thermo-régulée, Elevage sur lies, Sols argilo-graveleux, Sols de galets.', 6, 1, 'Région Bordeaux'),
(133, 'Graves AOP', 'Rouge', 'Cabernet franc - Cabernet Sauvignon - Merlot - Petit Verdot', 75, 14, 'Culture raisonnée, Vendanges mécaniques, Egrappage total, Fermentation en cuve inox thermo-régulée, Pigeage fréquent, Utilisation de levures indigènes, Macération pré fermentaire à froid, Elevage en barrique de deux vins, Elevage en cuve inox, Assemblage.', 8, 1, 'Région Bordeaux'),
(134, 'Graves AOP', 'Blanc', 'Muscadelle - Sauvignon -Sémillon', 75, 13, 'Culture raisonnée, Vendanges mécaniques, Egrappage total, Fermentation en fût de chêne, Bâtonnage régulier, Macération pré fermentaire à froid, Elevage en fût de chêne, Elevage sur lies, Bâtonnage régulier, Bouchon technique.', 11, 1, 'Région Bordeaux');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `producteur`
--
ALTER TABLE `producteur`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `vins`
--
ALTER TABLE `vins`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `vins`
--
ALTER TABLE `vins`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=137;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
