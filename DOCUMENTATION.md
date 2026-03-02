
# 📘 Documentation Technique - Itot Africa

## 1. Présentation du Projet
Itot Africa est une plateforme institutionnelle à fort impact conçue comme une **Infrastructure Humaine et Digitale**. Le site est une Single Page Application (SPA) immersive.

## 2. Stack Technique
*   **Framework :** React 19 (via ESM modules).
*   **Styling :** Tailwind CSS 3.4 (via CDN pour la flexibilité).
*   **Icônes :** Lucide React.

## 3. Architecture du Projet
Le projet suit une structure de composants modulaires :
*   `App.tsx` : Point d'entrée, gestionnaire de routage interne (state-based).
*   `/components` :
    *   `Navbar.tsx` & `Footer.tsx` : Éléments de structure persistants.
    *   `Hero.tsx`, `ProblemSection.tsx`, etc. : Sections de la Landing Page.
    *   `AboutPage.tsx`, `SolutionsPage.tsx`, etc. : Vues secondaires.

## 4. Installation et Développement Local

### Pré-requis
*   Un navigateur moderne supportant les modules ES6.

### Configuration Locale (Sans Build Step)
Le projet est conçu pour être "Lightweight". Pour le lancer localement :
1.  Clonez les fichiers dans un dossier racine.
2.  Utilisez un serveur local (ex: `Live Server` sur VS Code ou `python -m http.server`).

### Migration vers une Stack Node.js (Recommandé pour la prod)
Si vous souhaitez transformer ce prototype en projet standard :
```bash
# 1. Initialiser un projet Vite
npm create vite@latest itot-africa -- --template react-ts

# 2. Installer les dépendances
npm install lucide-react

# 3. Transférer les fichiers .tsx dans /src
```

## 5. Déploiement

### Stratégie de Hosting
*   **Vercel / Netlify (Recommandé) :** 
    *   Connectez votre dépôt GitHub.
*   **Serveur Statique (Nginx/Apache) :**
    *   Assurez-vous que les types MIME pour `.tsx` et `.ts` sont correctement gérés si vous ne compilez pas en JS pur.

## 6. Contraintes Techniques et Maintenance
*   **Performance :** Les images utilisent Unsplash avec des paramètres d'optimisation (`auto=format&fit=crop`). Pour la production, il est conseillé d'héberger les assets localement ou sur un CDN dédié (Cloudinary/S3).
*   **Accessibilité :** Le site utilise des balises sémantiques HTML5 et des attributs ARIA pour la navigation.

## 7. Évolutions Futures
1.  **Système de Design :** Extraction des constantes de couleurs vers un fichier `tailwind.config.js`.
2.  **Gestion d'État :** Migration vers `Zustand` ou `Context API` si la complexité de navigation augmente.
3.  **i18n :** Support multi-langues pour le rayonnement international d'Itot Africa.

---
*Document produit par le département Engineering - Itot Africa.*
