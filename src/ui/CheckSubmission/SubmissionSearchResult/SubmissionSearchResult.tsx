import React from 'react';
import Table from 'antd/lib/table';
import { Breakpoint } from 'antd/lib/_util/responsiveObserve';
import { IFeedback } from 'api/checkSubmission/checkSubmission.fromApi.types';
import { useAppSelector } from 'lib/redux/hooks';
import { formatDate } from 'lib/util/DateTimeUtil/formatDate/formatDate';
import { checkSubmissionData, checkSubmissionLoading } from '../store/selector';
import {
  SearchResultTitle,
  SubmissionResultDisplay,
  SubmissionResultDisplayWrapper
} from './SubmissionSearchResult.styles';

/**
 * To render user-friendly display text for feedback submission status
 * Display 'Pending' if the submission has not been processed
 * Else, display the submission feedback status
 *
 * @param feedbackStatus
 */
const feedbackStatusDisplay = (feedbackStatus: string | null) =>
  !feedbackStatus ? 'Pending' : feedbackStatus;

const SubmissionSearchResult = () => {
  const isLoadingSearchResult = useAppSelector(checkSubmissionLoading);
  const searchResult = useAppSelector(checkSubmissionData);

  // Column Display Configuration
  const columns = [
    {
      title: 'Name | Agency Name | Feedback | Processed Result',
      render: (record: IFeedback) => (
        <React.Fragment>
          {record.name}
          <br />
          {record.agencyName}
          <br />
          <br />
          {record.feedback}
          <br />
          {`Submitted at ${formatDate(record.createdAt)}`}

          <br />
          {`${feedbackStatusDisplay(record.processingResult)}`}
        </React.Fragment>
      ),
      responsive: ['xs' as Breakpoint]
    },
    {
      title: 'Name',
      dataIndex: 'name',
      responsive: ['sm' as Breakpoint]
    },
    {
      title: 'Agency Name',
      dataIndex: 'agencyName',
      responsive: ['sm' as Breakpoint]
    },
    {
      title: 'Feedback',
      dataIndex: 'feedback',
      responsive: ['sm' as Breakpoint]
    },
    {
      title: 'Submission Datetime',
      dataIndex: 'createdAt',
      render: (createdAt: string) => formatDate(createdAt),
      responsive: ['sm' as Breakpoint]
    },
    {
      title: 'Processing Result',
      dataIndex: 'processingResult',
      render: (processingResult: string | null) => feedbackStatusDisplay(processingResult),
      responsive: ['sm' as Breakpoint]
    }
  ];

  return (
    <SubmissionResultDisplayWrapper>
      <SearchResultTitle>Search Result</SearchResultTitle>

      <SubmissionResultDisplay>
        <Table
          columns={columns}
          dataSource={searchResult}
          pagination={false}
          loading={isLoadingSearchResult}
          rowKey="id" // To resolve 'Each child in a list should have a unique "key" prop'
        />
      </SubmissionResultDisplay>
    </SubmissionResultDisplayWrapper>
  );
};

export default SubmissionSearchResult;
