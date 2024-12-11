import { CenteredDescriptionWithIconBlocks } from './namespace/CenteredDescriptionWithIconBlocks'
import { CircleIconsCenterAligned } from './namespace/CircleIconsCenterAligned'
import { DescriptionOnLeftIconBlocksOnRight } from './namespace/DescriptionOnLeftIconBlocksOnRight'
import { SolidIconWithHoverEffect } from './namespace/SolidIconWithHoverEffect'
import { StackedCards } from './namespace/StackedCards'
import { TwoColsGrid } from './namespace/TwoColsGrid'

interface IconSectionType {
  CenteredDescriptionWithIconBlocks: typeof CenteredDescriptionWithIconBlocks;
  CircleIconsCenterAligned: typeof CircleIconsCenterAligned;
  DescriptionOnLeftIconBlocksOnRight: typeof DescriptionOnLeftIconBlocksOnRight;
  SolidIconWithHoverEffect: typeof SolidIconWithHoverEffect;
  StackedCards: typeof StackedCards;
  TwoColsGrid: typeof TwoColsGrid;
}

const IconSection: IconSectionType = {
  CenteredDescriptionWithIconBlocks,
  CircleIconsCenterAligned,
  DescriptionOnLeftIconBlocksOnRight,
  SolidIconWithHoverEffect,
  StackedCards,
  TwoColsGrid
};

export default IconSection;
