import { displayFactoryTwo } from 'email-template-object';
import { previewTextComponent } from '../../components';
import { settings as headSettings } from '../../display/sections/head';
import { settings as bodySettings } from '../../display/sections/body';
import { settings as mainSettings } from '../../display/sections/main';
import {
  createDisplayTemplateRenderer,
  createDisplayFrontMatterRenderer,
} from '@llazyemail/template-runtime-display';

const createFactory = () => new displayFactoryTwo();

export const renderDisplayTemplate = createDisplayTemplateRenderer({
  createFactory,
  bodySettings,
  mainSettings,
});

export const renderDisplayFrontMatterTemplate =
  createDisplayFrontMatterRenderer({
    createFactory,
    previewTextComponent,
    headSettings,
    bodySettings,
    mainSettings,
  });
