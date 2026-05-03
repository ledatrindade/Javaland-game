/*
  RewardScreen.jsx

  Responsabilidade:
  exibir a recompensa desbloqueada após a conclusão de um nível.

  As imagens das recompensas não dependem do idioma.
  As mensagens de texto vêm do uiText.js.
*/

import { useEffect } from 'react';

import Button from '../components/Button';
import GameCard from '../components/GameCard';
import HousePreview from '../components/HousePreview';

import { playSound } from '../services/soundPlayer';
import { useLanguage } from '../hooks/useLanguage';

import rewardToolbox from '../assets/house/rewards/reward-toolbox.png';
import rewardFence from '../assets/house/rewards/reward-fence.png';
import rewardFenceGate from '../assets/house/rewards/reward-fence-gate.png';
import rewardPetHouse from '../assets/house/rewards/reward-pet-house.png';
import rewardFlowers from '../assets/house/rewards/reward-flowers.png';
import rewardDog from '../assets/house/rewards/reward-dog.png';
import rewardCat from '../assets/house/rewards/reward-cat.png';

import rewardSofa from '../assets/house/rewards/reward-sofa.png';
import rewardLivingCoffeeTable from '../assets/house/rewards/reward-living-coffee-table.png';
import rewardBookshelf from '../assets/house/rewards/reward-bookshelf.png';
import rewardTv from '../assets/house/rewards/reward-tv.png';

import rewardToilet from '../assets/house/rewards/reward-toilet.png';
import rewardBathroomSink from '../assets/house/rewards/reward-bathroom-sink.png';
import rewardShower from '../assets/house/rewards/reward-shower.png';

import rewardTable from '../assets/house/rewards/reward-table.png';
import rewardKitchenSink from '../assets/house/rewards/reward-kitchen-sink.png';
import rewardStove from '../assets/house/rewards/reward-stove.png';
import rewardFridge from '../assets/house/rewards/reward-fridge.png';
import rewardKitchenShelves from '../assets/house/rewards/reward-kitchen-shelves.png';

import rewardBed from '../assets/house/rewards/reward-bed.png';
import rewardBedroomSideTable from '../assets/house/rewards/reward-bedroom-side-table.png';
import rewardWardrobe from '../assets/house/rewards/reward-wardrobe.png';

const rewardImages = {
  toolbox: rewardToolbox,
  fence: rewardFence,
  fenceGate: rewardFenceGate,
  petHouse: rewardPetHouse,
  flowers: rewardFlowers,
  dog: rewardDog,
  cat: rewardCat,

  sofa: rewardSofa,
  livingCoffeeTable: rewardLivingCoffeeTable,
  bookshelf: rewardBookshelf,
  tv: rewardTv,

  toilet: rewardToilet,
  bathroomSink: rewardBathroomSink,
  shower: rewardShower,

  table: rewardTable,
  kitchenSink: rewardKitchenSink,
  stove: rewardStove,
  fridge: rewardFridge,
  kitchenShelves: rewardKitchenShelves,

  bed: rewardBed,
  bedroomSideTable: rewardBedroomSideTable,
  wardrobe: rewardWardrobe,
};

function getRewardMessage(level, selectedPet, t) {
  /*
    O nível 5 é especial porque a recompensa depende da escolha do usuário:
    cachorro ou gato.
  */
  if (level.id === 5) {
    return t.reward.petMessage[selectedPet] || t.reward.petMessage.dog;
  }

  return t.reward.messages[level.id] || t.reward.fallback;
}

function RewardScreen({ level, progress, onContinue }) {
  const { t } = useLanguage();

  useEffect(() => {
    /*
      No nível 5, o som do pet já toca na escolha.
      Nos outros níveis, toca o som padrão de recompensa.
    */
    if (level.id !== 5) {
      playSound('reward', 0.75);
    }
  }, [level.id]);

  const rewardKey = level.reward === 'petChoice'
    ? progress.selectedPet
    : level.reward;

  const rewardImage = rewardImages[rewardKey];

  return (
    <div className="screen center-screen">
      <GameCard className="reward-card">
        <p className="eyebrow">{t.reward.eyebrow}</p>

        <h1>{t.reward.title}</h1>

        <p>{getRewardMessage(level, progress.selectedPet, t)}</p>

        {rewardImage ? (
          <div className="single-reward-box">
            <img
              src={rewardImage}
              alt={`${t.reward.eyebrow} ${level.id}`}
              className="single-reward-image"
            />
          </div>
        ) : (
          <HousePreview
            unlockedItems={progress.unlockedItems}
            selectedPet={progress.selectedPet}
            mode="reward"
          />
        )}

        <Button onClick={onContinue}>
          {t.reward.continue}
        </Button>
      </GameCard>
    </div>
  );
}

export default RewardScreen;