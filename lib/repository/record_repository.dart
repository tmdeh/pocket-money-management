abstract class RecordRepository {
  List<Record> _records = [];

  // 리스트 전체 불러오기
  List<Record> getRecords() {
    return _records;
  }
  // 리스트 아이템 불러오기
  Record getItem(int id) {
    return _records[id];
  }
  // 리스트 아이템 업데이트
  void updateItem(Record record) {}

  // 리스트 아이템 삭제
  void deleteItem(int id) {}
}
