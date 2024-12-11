import { SimpleCentered } from './namespace/SimpleCentered'
import { CenteredWithImage } from './namespace/CenteredWithImage'
import { GradientBackground } from './namespace/GradientBackground'
import { ImageWithReviews } from './namespace/ImageWithReviews'
import { WithEmailInput } from './namespace/WithEmailInput'

interface HeroSectionType {
  SimpleCentered: typeof SimpleCentered;
  CenteredWithImage: typeof CenteredWithImage;
  GradientBackground: typeof GradientBackground;
  ImageWithReviews: typeof ImageWithReviews;
  WithEmailInput: typeof WithEmailInput;
}

const HeroSection: HeroSectionType = {
  SimpleCentered,
  CenteredWithImage,
  GradientBackground,
  ImageWithReviews,
  WithEmailInput
};

export default HeroSection;
