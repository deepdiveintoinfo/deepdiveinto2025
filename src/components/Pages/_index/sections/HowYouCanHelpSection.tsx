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
              Join our efforts to analyze Project 2025. 
              Whether you're a researcher, writer, or concerned citizen, there's a way for you to contribute.
            </p>
            <Link to="/contribute">
              <Button className="m-0 p-0 mt-8 px-0 underline" variant={'link'}>
                Get Started <ArrowRight className="ml-2 size-4 stroke-secondary" />
              </Button>
            </Link>
          </div>
          <div className="w-full">
            <ul className="space-y-6 text-sm font-medium sm:text-base lg:text-lg">
              <li className='m-0 p-0'>
                <Link className="m-0 p-0 flex items-center" to="https://github.com/deepdiveinto2025/deepdiveinto2025/wiki/%F0%9F%9B%A0%EF%B8%8F-How-To-Contribute">
                  <Edit3Icon className="mr-4 size-5 stroke-secondary" />
                  <Button className="m-0 p-0 h-auto underline text-sm font-medium sm:text-base lg:text-lg" variant={'link'}>
                    Review and refine transcriptions and analysis.
                  </Button>
                </Link>
              </li>
              <li>
                <Link className="m-0 p-0 flex items-center" to="/colaborate">
                  <ListIcon className="mr-4 size-5 stroke-secondary" />
                  <Button className="m-0 p-0 h-auto underline text-sm font-medium sm:text-base lg:text-lg" variant={'link'}>
                    Transcribe chapters using our guidelines.
                  </Button>
                </Link>
              </li>
              <li>
                <Link className="m-0 p-0 flex items-center" to="/colaborate">
                  <MessageCircleIcon className="mr-4 size-5 stroke-secondary" />
                  <Button className="m-0 p-0 h-auto underline text-sm font-medium sm:text-base lg:text-lg" variant={'link'}>
                    Collaborate on analysis to break down every sentence.
                  </Button>
                </Link>
              </li>
              <li>
                  <Link className="flex items-center" to="https://github.com/deepdiveinto2025/deepdiveinto2025/discussions">
                    <Users2Icon className="mr-4 size-5 stroke-secondary" />
                    <Button className="m-0 p-0 h-auto underline text-sm font-medium sm:text-base lg:text-lg" variant={'link'}>
                      Join discussions on GitHub to share insights.
                    </Button>
                  </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
