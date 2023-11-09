abstract interface class RecordRepository {

  late List<Record> _recrods;

  // 리스트 전체 불러오기
  List<Record> getRecordList();


  // 리스트 아이템 불러오기
  Record getItem(int id);

  // 리스트 아이템 업데이트
  void updateItem(Record record, int id);

  // 리스트 아이템 삭제
  void deleteItem(int id);
}
