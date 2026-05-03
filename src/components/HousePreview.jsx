/*
  HousePreview.jsx

  Responsabilidade:
  mostrar a imagem atual da construção no menu e na tela final.

  Regra visual:
  - antes do pet, usa cenas únicas;
  - depois do nível 5, usa versões dog/cat;
  - a ordem de verificação vai da recompensa mais avançada para a mais antiga.
*/

import { useLanguage } from '../hooks/useLanguage';

import sceneEmptyTerrain from '../assets/house/scenes/scene-empty-terrain.png';
import sceneToolbox from '../assets/house/scenes/scene-toolbox.png';
import sceneFence from '../assets/house/scenes/scene-fence.png';
import sceneFenceGate from '../assets/house/scenes/scene-fence-gate.png';
import scenePetHouse from '../assets/house/scenes/scene-pet-house.png';
import sceneFlowers from '../assets/house/scenes/scene-flowers.png';
import sceneOutsideDog from '../assets/house/scenes/scene-outside-dog.png';
import sceneOutsideCat from '../assets/house/scenes/scene-outside-cat.png';

import sceneSofaDog from '../assets/house/scenes/scene-sofa-dog.png';
import sceneSofaCat from '../assets/house/scenes/scene-sofa-cat.png';
import sceneLivingCoffeeTableDog from '../assets/house/scenes/scene-living-coffee-table-dog.png';
import sceneLivingCoffeeTableCat from '../assets/house/scenes/scene-living-coffee-table-cat.png';
import sceneBookshelfDog from '../assets/house/scenes/scene-bookshelf-dog.png';
import sceneBookshelfCat from '../assets/house/scenes/scene-bookshelf-cat.png';
import sceneLivingCompleteDog from '../assets/house/scenes/scene-living-complete-dog.png';
import sceneLivingCompleteCat from '../assets/house/scenes/scene-living-complete-cat.png';

import sceneToiletDog from '../assets/house/scenes/scene-toilet-dog.png';
import sceneToiletCat from '../assets/house/scenes/scene-toilet-cat.png';
import sceneBathroomSinkDog from '../assets/house/scenes/scene-bathroom-sink-dog.png';
import sceneBathroomSinkCat from '../assets/house/scenes/scene-bathroom-sink-cat.png';
import sceneBathroomCompleteDog from '../assets/house/scenes/scene-bathroom-complete-dog.png';
import sceneBathroomCompleteCat from '../assets/house/scenes/scene-bathroom-complete-cat.png';

import sceneTableDog from '../assets/house/scenes/scene-table-dog.png';
import sceneTableCat from '../assets/house/scenes/scene-table-cat.png';
import sceneKitchenSinkDog from '../assets/house/scenes/scene-kitchen-sink-dog.png';
import sceneKitchenSinkCat from '../assets/house/scenes/scene-kitchen-sink-cat.png';
import sceneStoveDog from '../assets/house/scenes/scene-stove-dog.png';
import sceneStoveCat from '../assets/house/scenes/scene-stove-cat.png';
import sceneFridgeDog from '../assets/house/scenes/scene-fridge-dog.png';
import sceneFridgeCat from '../assets/house/scenes/scene-fridge-cat.png';
import sceneKitchenCompleteDog from '../assets/house/scenes/scene-kitchen-complete-dog.png';
import sceneKitchenCompleteCat from '../assets/house/scenes/scene-kitchen-complete-cat.png';

import sceneBedDog from '../assets/house/scenes/scene-bed-dog.png';
import sceneBedCat from '../assets/house/scenes/scene-bed-cat.png';
import sceneBedroomSideTableDog from '../assets/house/scenes/scene-bedroom-side-table-dog.png';
import sceneBedroomSideTableCat from '../assets/house/scenes/scene-bedroom-side-table-cat.png';
import sceneFinalCompleteDog from '../assets/house/scenes/scene-final-complete-dog.png';
import sceneFinalCompleteCat from '../assets/house/scenes/scene-final-complete-cat.png';

function getPetScene(selectedPet, dogScene, catScene) {
  return selectedPet === 'cat' ? catScene : dogScene;
}

function getCurrentScene(unlockedItems, selectedPet) {
  const hasItem = (item) => unlockedItems.includes(item);

  if (hasItem('wardrobe')) {
    return getPetScene(selectedPet, sceneFinalCompleteDog, sceneFinalCompleteCat);
  }

  if (hasItem('bedroomSideTable')) {
    return getPetScene(selectedPet, sceneBedroomSideTableDog, sceneBedroomSideTableCat);
  }

  if (hasItem('bed')) {
    return getPetScene(selectedPet, sceneBedDog, sceneBedCat);
  }

  if (hasItem('kitchenShelves')) {
    return getPetScene(selectedPet, sceneKitchenCompleteDog, sceneKitchenCompleteCat);
  }

  if (hasItem('fridge')) {
    return getPetScene(selectedPet, sceneFridgeDog, sceneFridgeCat);
  }

  if (hasItem('stove')) {
    return getPetScene(selectedPet, sceneStoveDog, sceneStoveCat);
  }

  if (hasItem('kitchenSink')) {
    return getPetScene(selectedPet, sceneKitchenSinkDog, sceneKitchenSinkCat);
  }

  if (hasItem('table')) {
    return getPetScene(selectedPet, sceneTableDog, sceneTableCat);
  }

  if (hasItem('shower')) {
    return getPetScene(selectedPet, sceneBathroomCompleteDog, sceneBathroomCompleteCat);
  }

  if (hasItem('bathroomSink')) {
    return getPetScene(selectedPet, sceneBathroomSinkDog, sceneBathroomSinkCat);
  }

  if (hasItem('toilet')) {
    return getPetScene(selectedPet, sceneToiletDog, sceneToiletCat);
  }

  if (hasItem('tv')) {
    return getPetScene(selectedPet, sceneLivingCompleteDog, sceneLivingCompleteCat);
  }

  if (hasItem('bookshelf')) {
    return getPetScene(selectedPet, sceneBookshelfDog, sceneBookshelfCat);
  }

  if (hasItem('livingCoffeeTable')) {
    return getPetScene(selectedPet, sceneLivingCoffeeTableDog, sceneLivingCoffeeTableCat);
  }

  if (hasItem('sofa')) {
    return getPetScene(selectedPet, sceneSofaDog, sceneSofaCat);
  }

  if (hasItem('petChoice') && selectedPet === 'dog') {
    return sceneOutsideDog;
  }

  if (hasItem('petChoice') && selectedPet === 'cat') {
    return sceneOutsideCat;
  }

  if (hasItem('flowers')) {
    return sceneFlowers;
  }

  if (hasItem('petHouse')) {
    return scenePetHouse;
  }

  if (hasItem('fenceGate')) {
    return sceneFenceGate;
  }

  if (hasItem('fence')) {
    return sceneFence;
  }

  if (hasItem('toolbox')) {
    return sceneToolbox;
  }

  return sceneEmptyTerrain;
}

function HousePreview({ unlockedItems = [], selectedPet = null, mode = 'menu' }) {
  const { t } = useLanguage();

  const currentScene = getCurrentScene(unlockedItems, selectedPet);

  return (
    <div className={`house-preview house-preview-${mode}`}>
      <h3>{t.house.title}</h3>

      <div className="scene-image-box">
        <img
          src={currentScene}
          alt={t.house.title}
          className="scene-image"
        />
      </div>
    </div>
  );
}

export default HousePreview;