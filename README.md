


# TO push your code on git hub
  step -1 : git init
  step- 2:  git add . (to add all folder )
  step-3:   git commit -m "message "
  step-4:   git push -u origin main
  



  # Food Delivery web App 🍟

# React full Tutorial


/* Components of Our Food-Order App
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search Bar
 * - Restaurant-Container
 *  - Restaurant-Card
 *    - Img
 *    - Name of Res, Star Rating, cuisine, delivery time.
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 */

# two types of Export /Import

 - Default Export/Import

export default Component;
import Component from "path";

 - Named Export/Import

 export const Component;
 import {Componant} from "path";


#  React Hooks  (Normal JS utility Function)
  - useState() - Superpowerful state Variable in react
  - useEffect() - 


# 2 types Rauting in web apps
- client side Rauting
- server side Rauting

# Parcel
- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundles



 # Redux Toolkit
  - Install @reduxjs/toolkit and react-redux
  - Build our store
  - Connect our store to our app
  - Slice (cartSlice)
  - dispatch(action)
  - Selector


# Types of testing (devloper)
 - Unit Testing
 - Integration Testing
 - End to End Testing - e2e testing

# Setting up Testing in our app
 - Install React Testing Library
 - Installed jest
 - Installed Babel dependencies
 - Configure Babel 
 - Configure Parcel Config file to disable default babel transpilation 
 - Jest  - npx jest --init
 - Install jsdom library
 - Install @babel/preset-react - to make JSX work in test cases
 - Include @babel/preset-react inside my babel config
 - npm i -D @testing-library/jest-dom
 


  // * RENDER CYCLE OF CLASS BASED COMPONENTS WHEN THE CLASS HAS TWO CHLIDREN
  
  /* 
  *  - Parent Constructor()              -- Render Phase
  *  - Parent Render()
  
  *    - First Child Constructor()
  *    - First Child Render()
  *                                      -- Render Phase
  *    - Second Child Constructor()
  *    - Second Child Render()
  
  *     <DOM UPDATED - IN SINGLE BATCH> -> Optimizes the Performance of App  -- Commit Phase
  *    - First Child ComponentDidMount()
  *    - Second Child ComponentDidMount()
  
  *  - Parent ComponentDidMount()=
   ![Screenshot 2024-07-18 234606](https://github.com/user-attachments/assets/f717ac65-d31d-4487-b4d5-3f800f11d305)

  *  #wedsite view
  *  Items Section
  *  ![Screenshot 2024-07-18 234716](https://github.com/user-attachments/assets/9059522a-2d11-48d4-a792-fc6e95ca2f6d)

  *  Payment Section
  *  ![Screenshot 2024-07-18 234850](https://github.com/user-attachments/assets/96e35996-e421-41c1-9ab6-b43f65570009)

  

   # notes
   

  // if no dependency array => useEffect is called on every render
  // if dependency array is empty = [] => useEffect is called on initial render(just once)
  // if dependency array is [btnNameReact] => called everytime btnNameReact is updated
