# SigForge

Générateur de signatures courriel (pour Gmail, etc.).

## Icônes colorées et compatibles Gmail

Pour que les icônes sociales s’affichent **avec ta couleur** chez tous tes destinataires (y compris Gmail) :

1. Dans SigForge, section **Couleurs** → choisis la couleur **Icônes sociaux**.
2. Section **Icônes sur ton domaine** → indique l’**URL de base** où tu héberges les fichiers (ex. `https://studio-reverbere.com/sigforge-icons/`).
3. Clique sur **Télécharger les 3 icônes (ZIP)**.
4. Décompresse le ZIP et envoie les 3 fichiers (`linkedin.svg`, `instagram.svg`, `facebook.svg`) sur ton serveur à l’URL indiquée (même chemin que l’URL de base).
5. **Copie la signature** et colle-la dans Gmail.

Les icônes pointent alors vers ton domaine ; Gmail et les clients mail les affichent correctement avec ta couleur.

## Autres options

- **Icônes CDN** : coche « Sinon : icônes CDN » pour utiliser des icônes sans hébergement (couleur par défaut des marques).
- **Netlify** : si tu déploies l’app sur Netlify, tu peux utiliser l’URL Netlify pour des icônes colorées dynamiques (selon les environnements, cela peut être bloqué).

## Utilisation

Ouvre `index.html` dans un navigateur (ou la version déployée). Renseigne tes infos, choisis les couleurs, copie la signature et colle-la dans les paramètres de signature de Gmail.
