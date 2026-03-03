# SigForge

Générateur de signatures courriel (pour Gmail, etc.).

## Icônes sociales colorées dans la signature

Pour que les icônes LinkedIn, Instagram et Facebook s’affichent **avec la couleur choisie** dans la signature collée en e-mail (et pas seulement dans l’aperçu), l’app doit être servie depuis **Netlify**.

1. Connecte ce dépôt à [Netlify](https://www.netlify.com/) (nouveau site → importer depuis Git).
2. Build : laisser les réglages par défaut (build command vide, dossier de publication racine).
3. Déployer.

Une fois déployé, l’URL des icônes utilisera ton site Netlify. Si tu utilises SigForge depuis GitHub Pages ou en local, les icônes pointent par défaut vers `https://sigforge.netlify.app` ; pour avoir ta couleur partout, déploie ce repo sur Netlify (même sous un autre nom de site) et ouvre l’app via l’URL Netlify.

## Utilisation

Ouvre `index.html` dans un navigateur (ou utilise la version déployée). Renseigne tes infos, choisis les couleurs, copie la signature et colle-la dans les paramètres de signature de Gmail.
