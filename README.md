# Portfolio
Ce projet a pour but de créer un portfolio sert de preuve de compétences lors de la recherche d’emploi.

Portfolio personnel développé avec **Next.js**, **Tailwind CSS**, **Redux** et **Next API**, dans le but de présenter mes compétences, mes projets et mon expérience professionnelle.

Le portfolio permet de :

- présenter mon profil et mes compétences
- afficher mes projets de façon dynamique
- consulter le détail de chaque projet
- créer un compte et se connecter
- consulter, ajouter et modifier des témoignages
- démontrer l’utilisation de **Redux**, **Next API**, **SQLite/Sequelize** et la **protection des routes**

---

## Technologies utilisées
On démarre le projet avec 'npm run dev'

### Frontend
- Next.js
- React
- Tailwind CSS
- Redux Toolkit
- Axios

### Backend
- Next API Routes
- Sequelize
- SQLite
- JWT
- bcryptjs
- Postman pour tester (https://abileneahue-7158764.postman.co/workspace/Abil%C3%A8ne-Ahu%C3%A9's-Workspace~f8925f41-79a5-4dc5-8571-820e3c293ec3/collection/52117415-3855de43-a1a4-408b-a973-1c0667dcc4bd?action=share&source=copy-link&creator=52117415)

---

## Fonctionnalités principales

### 1. Page d’accueil
- présentation personnelle
- mise en avant de mon profil de développeuse fullstack
- affichage de mes compétences
- mise en avant de mon expérience COOP chez **ESDC**
- navigation claire vers les autres sections du portfolio
  <img width="644" height="436" alt="accueil" src="https://github.com/user-attachments/assets/388f1b46-32dd-4c35-93ca-e556dd58a7a7" />


### 2. Authentification
- page d’inscription
- page de connexion
- validation des formulaires
- messages d’erreur utilisateur
- gestion de l’authentification avec token
<img width="314" height="363" alt="erreur" src="https://github.com/user-attachments/assets/c8aabf7d-f2fb-42a4-86cc-697bbe22aec0" />
<img width="341" height="347" alt="connection" src="https://github.com/user-attachments/assets/4ae47e85-cb95-4ea3-a603-403f854e5cce" />
<img width="299" height="401" alt="inscription" src="https://github.com/user-attachments/assets/3937a04a-ddde-4041-98ee-286311c69c58" />


### 3. Projets
- récupération dynamique des projets depuis le backend
  <img width="518" height="356" alt="projet" src="https://github.com/user-attachments/assets/e59c917a-b205-4f1c-b5ff-3a3b6900b5e6" />
  <img width="628" height="423" alt="postman" src="https://github.com/user-attachments/assets/9f00eaab-e25a-4d5d-ace2-bc46601244e2" />
  <img width="884" height="495" alt="projets" src="https://github.com/user-attachments/assets/047be2a6-ee95-4210-8d70-fb2d4ef60a5e" />

- affichage sous forme de cartes
- page de détail pour chaque projet
- technologies utilisées visibles
- lien GitHub pour certains projets
<img width="518" height="356" alt="projet" src="https://github.com/user-attachments/assets/43a4f192-bed0-432a-b38c-95586e74d0fe" />
<img width="644" height="411" alt="projet_detail" src="https://github.com/user-attachments/assets/79188cea-0d20-4395-8643-6d29c1041112" />


### 4. Témoignages
- affichage des témoignages enregistrés
- ajout d’un témoignage
- modification d’un témoignage
- données gérées via le backend
<img width="932" height="356" alt="temoignage" src="https://github.com/user-attachments/assets/09419103-2e1d-4f60-8a50-0069124b0d29" />
<img width="689" height="241" alt="temoignage_edit" src="https://github.com/user-attachments/assets/cdfc03cb-2f23-4a97-adba-5a1312a6a6eb" />


### 5. Protection des routes
- les pages sensibles sont accessibles uniquement après connexion
- utilisation du middleware pour la gestion des accès
<img width="341" height="347" alt="connection" src="https://github.com/user-attachments/assets/4ae47e85-cb95-4ea3-a603-403f854e5cce" />
<img width="299" height="401" alt="inscription" src="https://github.com/user-attachments/assets/3937a04a-ddde-4041-98ee-286311c69c58" />

### 6. Responsive Design
- interface pensée pour être adaptable sur ordinateur, tablette et téléphone


---

## Structure du projet

```bash
app/
 ├── api/
 │   ├── auth/
 │   ├── projets/
 │   └── temoignages/
 ├── inscription/
 ├── login/
 ├── projets/
 │   └── [id]/
 ├── temoignages/
 │   ├── new/
 │   └── edit/
 │       └── [id]/
 ├── layout.jsx
 ├── page.jsx
 └── globals.css

components/
 ├── Footer.jsx
 ├── Header.jsx
 ├── ProjetCard.jsx
 ├── Providers.jsx
 └── TemoignageForm.jsx

controllers/
 ├── authController.js
 ├── projetController.js
 └── temoignageController.js

models/
 ├── User.js
 ├── Projet.js
 ├── Temoignage.js
 └── index.js

store/
 ├── store.js
 └── slices/
     ├── authSlice.js
     ├── projetSlice.js
     └── temoignageSlice.js

config/
 └── db.js
