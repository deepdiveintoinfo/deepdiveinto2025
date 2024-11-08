import { CenterAlignedSearchWithTags } from './namespace/CenterAlignedSearchWithTags'

import { CenterAlignedWithAForm } from './namespace/CenterAlignedWithAForm'
import { ImageAndForm } from './namespace/ImageAndForm'
import { SignUpForm } from './namespace/SignUpForm'
interface HeroFormsType {
  CenterAlignedSearchWithTags: typeof CenterAlignedSearchWithTags;
  CenterAlignedWithAForm: typeof CenterAlignedWithAForm
  ImageAndForm: typeof ImageAndForm
  SignUpForm: typeof SignUpForm
}

const HeroForms: HeroFormsType = {
  CenterAlignedSearchWithTags,
  CenterAlignedWithAForm,
  ImageAndForm,
  SignUpForm
};

export { HeroForms };
