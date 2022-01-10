import React from 'react';
import { Route } from './GlobalRoutes.type';
import { PATHS } from '../paths/paths';

import Home from 'ui/Home/Home';

import CheckSubmission from 'ui/CheckSubmission/CheckSubmission';
import SubmitFeedback from 'ui/SubmitFeedback/SubmitFeedback';

/**
 * A router that defines the paths and properties specific for routing in the entire application.
 *
 * == USAGE ==
 *
 * Define routes in the below setup by:
 *   - Specifying the path in the browser that, when navigated to, will render its
 *     corresponding component.
 *   - Specifying the React component to be rendered, preferably a component
 *     that represents the page (top-level entry point) of the functionality.
 *
 */

export const ROUTES: Route[] = [
  // ROOT
  {
    path: PATHS.ROOT.path,
    exact: true,
    component: <Home />
  },

  {
    path: PATHS.SUBMIT_FEEDBACK.path,
    exact: true,
    component: <SubmitFeedback />
  },

  {
    path: PATHS.CHECK_SUBMISSION.path,
    exact: true,
    component: <CheckSubmission />
  }
];
