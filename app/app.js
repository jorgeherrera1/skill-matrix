'use strict';

import './styles/app.scss';

import React from 'react';
import {render} from 'react-dom';
import SkillSearch from './components/skill-search';

render(<SkillSearch />, document.getElementsByClassName('app')[0]);
