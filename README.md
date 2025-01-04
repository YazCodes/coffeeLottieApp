
# Coffee Lottie ☕️

## **About the App**
Coffee Lottie is an interactive mobile app that helps coffee enthusiasts discover amazing coffee shops with unique aesthetics. Inspired by the vibrant coffee culture of Vietnam, Coffee Lottie takes the guesswork out of finding great coffee shops. A lottery you win every time!

---

## **Inspiration**
This app was inspired by my recent travels to Vietnam, a country with a rich coffee culture and some of the best coffee in the world. From the iconic egg coffee to the weird yet wonderful salt coffee, I fell in love with the diversity and charm of Vietnamese coffee shops.

As a traveler on limited time, it was overwhelming to choose where to go. I wanted to create an app that highlights the best coffee shops I visited, each offering amazing coffee with unique aesthetics. Coffee Lottie simplifies the decision-making process while keeping the element of surprise alive.

---

## **Tech Stack**
- **Programming Language**: JavaScript
- **Framework**: React Native and Jest (testing)
- **Libraries**:
  - React Navigation for navigation
  - Lottie for animations
  - AsyncStorage for state management and data persistence
  - Expo for easy app development and deployment

---
## Demo
- [Click here to watch the demo video of Coffee Lottie App](https://drive.google.com/file/d/1HihXdjji1x-RC6THMliIIBZKSdvpQ_i_/view?usp=sharing)

<img width="314" alt="Screenshot 2025-01-03 at 12 32 02" src="https://github.com/user-attachments/assets/d592b523-d727-4e9a-ab0c-de4f49bfc4b3" />
<img width="321" alt="Screenshot 2025-01-03 at 12 32 17" src="https://github.com/user-attachments/assets/7b467ea9-ed79-4f32-8d95-0e02c2afab58" />
<img width="312" alt="Screenshot 2025-01-03 at 12 32 28" src="https://github.com/user-attachments/assets/3112390b-694d-4bce-af23-9ada3e75bde0" />
<img width="296" alt="Screenshot 2025-01-03 at 12 33 06" src="https://github.com/user-attachments/assets/450cc795-a69a-46cc-9cbb-0a2c9d8dcf35" />
<img width="319" alt="Screenshot 2025-01-04 at 16 55 55" src="https://github.com/user-attachments/assets/c8c29bd2-44d7-47ed-b4c9-2d1fde360bde" />
<img width="323" alt="Screenshot 2025-01-04 at 16 56 51" src="https://github.com/user-attachments/assets/76655ee2-a60b-4dae-abf6-bc5b18908d11" />





## **Features and Learnings**

### **Features**
1. **Coffee Shop Lottery**: 
   - Randomly generate a coffee shop suggestion from a curated list.
2. **Favorites**: 
   - Save your favorite coffee shops to revisit later.
   - Prevents duplication of saving the same coffee shop
   - Pop up notifications informing the users once they have saved a coffee shop or if they have already saved it
   - The ability to clear favorites lists
3. **Details Screen**:
   - View a coffee shop's name, aesthetics rating, and multimedia (images/videos).
4. **Lottie Animations**: 
   - Seamlessly integrated animations for loading and splash screens.
5. **Carousel Media Viewer**:
   - Swipe through coffee shop images and videos for a better experience.
6. **Responsive Design**:
   - Sleek and modern UI optimized for mobile devices.

### **What I Learned**
- How to use **React Native Navigation** to create stacks and tab navigators.
- Implementing **AsyncStorage** for managing persistent data locally.
- Integrating **Lottie animations** for a polished and dynamic user experience.
- Creating custom buttons
- Managing component state and props effectively in React Native.
- Debugging and resolving common issues like splash screen bugs and dependency conflicts.

---

### **Testing** 
   - Used the Jest testing framework
---

### **User stories**
1. Random Coffee Shop Generator
- As a user, I want to press a button to generate a random coffee shop, so I can discover new places to visit.
- **Acceptance Criteria:**
- A "Generate" button appears on the home screen.
- Each press of the button displays a new coffee shop with its name, location, rating, and an image.
2. View Coffee Shop Details
- As a user, I want to see detailed information about the coffee shop, so I can decide if I want to visit.
- **Acceptance Criteria:**
Details include the coffee shop’s name,aesthetics rating, images and videos of the cafe
3. Save to Favorites
- As a user, I want to save my favorite coffee shops to a list, so I can easily revisit them later.
- **Acceptance Criteria:**
- A "Save to Favorites" button is available on the coffee shop details page.
- Saved coffee shops persist even after the app is closed.
4. View Favorites List
- As a user, I want to view all my saved coffee shops in one place, so I can access them quickly.
- **Acceptance Criteria:**
- A separate "Favorites" screen displays a list of saved coffee shops.
-Each coffee shop in the list shows its name and rating, with an option to remove it from the list.

---

## **How I Can Improve the App**

### **Short-Term Goals**
1. **Add User Reviews**:
   - Enable users to leave ratings and reviews for coffee shops.
2. **Enhanced Search Filters**:
   - Filter coffee shops by aesthetics, location, or coffee type.
3. **Location Integration**:
   - Add GPS-based suggestions for nearby coffee shops.
4. **Expand the tests**:
   - Create more tests for edge cases

### **Long-Term Goals**
1. **Multi-City Support**:
   - Expand the app to include coffee shops from other coffee-loving cities worldwide.
2. **Language Localization**:
   - Support multiple languages for a global audience.
3. **Social Sharing**:
   - Allow users to share their favorite coffee shops on social media.

---

## **How to Run the App**
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/coffeelottie.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npx expo start
   ```
4. Open the app on your phone using the **Expo Go** app or a simulator.

---

## **Acknowledgments**
- **Vietnamese Coffee Culture**: For inspiring the creation of this app.
- **React Native Community**: For providing excellent resources and support.
