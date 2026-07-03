import { Science } from '~/components/landing/Science';
import { BeforeAfter } from '~/components/landing/BeforeAfter';
import { Comparison } from '~/components/landing/Comparison';
import { Timeline } from '~/components/landing/Timeline';
import { Reviews } from '~/components/landing/Reviews';
import { FAQ } from '~/components/landing/FAQ';
import { QuizCTA } from '~/components/landing/QuizCTA';
import { MainDoc } from '~/components/landing/MainDoc';

// New behavioral sections
import { FutureRegret } from '~/components/landing/FutureRegret';
import { AnchoringPrice } from '~/components/landing/AnchoringPrice';
import { RiskReversal } from '~/components/landing/RiskReversal';

export const LANDING_COMPONENTS = {
  FutureRegret,
  BeforeAfter,
  Science,
  Comparison,
  AnchoringPrice,
  MainDoc,
  RiskReversal,
  Reviews,
  FAQ,
  Timeline,
  QuizCTA,
};

export const productLandingConfigs = {
  // 2-in-1 Compounded Spray
  'hair-growth-complex': [
    { 
      type: 'FutureRegret', 
      props: { 
        title: "Hair Loss is a One-Way Street", 
        subtitle: "In biology, doing nothing is an active choice. Once a follicle dies, it is gone forever. The cheapest time to save your hair is right now."
      } 
    },
    { type: 'BeforeAfter' },
    { type: 'Science' },
    { type: 'Comparison' },
    { 
      type: 'AnchoringPrice', 
      props: {
        dailyPrice: "66", 
        alternativePrice: "Rs 800,000",
        alternativeName: "Surgical Hair Transplant"
      } 
    },
    { type: 'MainDoc' },
    { type: 'RiskReversal' },
    { type: 'Reviews' },
    { type: 'FAQ' }
  ],
  // Biotin Plus
  'biotin': [
    { type: 'BeforeAfter' },
    { type: 'Science' },
    { type: 'Comparison' },
    { 
      type: 'AnchoringPrice', 
      props: {
        dailyPrice: "55", 
        alternativePrice: "Rs 150 / day",
        alternativeName: "Premium Takeaway Coffee"
      } 
    },
    { type: 'RiskReversal' },
    { type: 'Reviews' },
    { type: 'FAQ' }
  ],
  // Fallback default landing flow
  'default': [
    { type: 'BeforeAfter' },
    { type: 'Science' },
    { type: 'Comparison' },
    { type: 'RiskReversal' },
    { type: 'Reviews' },
    { type: 'FAQ' }
  ]
};
