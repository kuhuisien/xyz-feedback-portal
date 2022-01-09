import React, { useState } from 'react';
import CheckSubmissionForm from './CheckSubmissionForm/CheckSubmissionForm';
import SubmissionSearchResult from './SubmissionSearchResult/SubmissionSearchResult';

const CheckSubmission = () => {
  const [displaySearchResult, setDisplaySearchResult] = useState(false);

  const onFormSubmit = () => setDisplaySearchResult(true);
  return (
    <>
      {/* check submission form */}
      <CheckSubmissionForm onFormSubmit={onFormSubmit} />

      {/* submission search result display */}
      {displaySearchResult && <SubmissionSearchResult />}
    </>
  );
};

export default CheckSubmission;
