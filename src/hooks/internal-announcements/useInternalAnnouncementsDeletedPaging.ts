import { usePaging } from 'hooks/usePaging';
import { useGetInternalAnnouncementsDeletedQuery } from 'services';
import { FindAllInternalAnnouncementDto } from 'types';
import { DEFAULT_PAGE_SIZE } from 'utils';
const pageSize = DEFAULT_PAGE_SIZE;
export function useInternalAnnouncementsDeletedPaging(
  params: Omit<FindAllInternalAnnouncementDto, 'pageIndex' | 'pageSize'>
) {
  const { keyword, isRequestConfirm, organizationUnitId, statusId } = params;
  const { pageIndex, changePage, resetPage } = usePaging(params);
  const {
    data: dataResponse,
    error,
    isLoading,
    isFetching
  } = useGetInternalAnnouncementsDeletedQuery({
    pageIndex: pageIndex,
    pageSize,
    keyword,
    isRequestConfirm,
    organizationUnitId,
    statusId
  });
  const handleChangePage = changePage;

  return {
    data: dataResponse?.data.rows,
    count: dataResponse ? dataResponse.data.count : 0,
    pageIndex,
    isLoading: isFetching || isLoading,
    error,
    handleChangePage,
    resetPage
  };
}