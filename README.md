# SigForge

Générateur de signatures courriel (pour Gmail, etc.).

## Photo de profil hébergée (stable dans Gmail)

Gmail supprime les images intégrées en base64 quand on enregistre une signature — la photo « saute ». SigForge évite le problème en **hébergeant la photo** automatiquement :

1. Clique sur « Cliquer pour ajouter une photo » et choisis ton image.
2. La photo est recadrée en carré, redimensionnée, puis envoyée sur Vercel Blob via `api/upload-photo.js`.
3. La signature référence l'URL publique retournée (`https://…public.blob.vercel-storage.com/photos/…`) — elle s'affiche partout, comme avec WiseStamp.

Côté infra : le projet Vercel `sigforge` est connecté au store Blob `sigforge-photos` (variable `BLOB_READ_WRITE_TOKEN` injectée automatiquement). L'avatar par défaut est servi depuis `avatar-placeholder.png` sur le site.

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
