import { Button, Dropdown } from 'antd';
import { ItemType } from 'antd/es/menu/interface';
import { ThreeDots } from 'assets';
import { messages } from 'messages';
import { FrequentlyAskedQuestionOmitContentDto } from 'types';

type FrequentlyAskedQuestionActionsProps = {
  faq: FrequentlyAskedQuestionOmitContentDto;
  onDelete?: (faq: FrequentlyAskedQuestionOmitContentDto) => void;
  onUpdateStatus?: (faq: FrequentlyAskedQuestionOmitContentDto) => void;
};

const FrequentlyAskedQuestionActions = ({ faq, onDelete, onUpdateStatus }: FrequentlyAskedQuestionActionsProps) => {
  const actionItems: ItemType[] = [
    {
      key: 'updateStatus',
      label: messages.updateStatus
    },
    {
      key: 'delete',
      danger: true,
      label: messages.deleteButtonText
    }
  ];

  const onClickActionItem = (action: string, data: FrequentlyAskedQuestionOmitContentDto) => {
    switch (action) {
      case 'updateStatus':
        onUpdateStatus?.(data);
        break;
      case 'delete':
        onDelete?.(data);
        break;
    }
  };

  return (
    <>
      <Dropdown
        trigger={['click']}
        menu={{
          items: actionItems,
          onClick: ({ key }) => {
            onClickActionItem(key, faq);
          }
        }}
      >
        <Button type='text' shape='circle'>
          <ThreeDots />
        </Button>
      </Dropdown>
    </>
  );
};

export default FrequentlyAskedQuestionActions;
