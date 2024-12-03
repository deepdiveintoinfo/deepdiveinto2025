import { ArrowRight, Edit3Icon, ListIcon, MessageCircleIcon, Users2Icon } from 'lucide-react';

import { Button } from '@/components/ThirdParty/ShadCn/Button';
import { Link } from 'react-router-dom';

export const HowYouCanHelpSection = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-8 rounded-lg border border-primary-light bg-white/50 p-6 md:flex-row lg:px-20 lg:py-16">
          <div className="w-full">
            <h4 className="mb-1 text-2xl font-bold md:text-3xl">
              How You Can Help
            </h4>
            <p className="text-muted-foreground">
              Join our efforts to analyze Project 2025. Whether you're a researcher, writer, or concerned citizen, there's a way for you to contribute.
            </p>
            <Link to="/contribute">
              <Button className="mt-8 px-0 underline" variant={'link'}>
                Get Started <ArrowRight className="ml-2 size-4 stroke-secondary" />
              </Button>
            </Link>
          </div>
          <div className="w-full">
            <ul className="space-y-6 text-sm font-medium sm:text-base lg:text-lg">
              <li className="flex items-center">
                <Edit3Icon className="mr-4 size-5 stroke-secondary" />
                  Review and refine transcriptions and analysis.
              </li>
              <li className="flex items-center">
                <ListIcon className="mr-4 size-5 stroke-secondary" />
                  Transcribe chapters using our guidelines.
              </li>
              <li className="flex items-center">
                <MessageCircleIcon className="mr-4 size-5 stroke-secondary" />
                  Collaborate on analysis to break down every sentence.
              </li>
              <li className="flex items-center">
                <Users2Icon className="mr-4 size-5 stroke-secondary" />
                  Join discussions on GitHub to share insights.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
