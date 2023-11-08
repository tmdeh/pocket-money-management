
enum RecordType {
  spend,
  income
}


class Record {
  RecordType type;
  String memo;
  int price;
  String category;
  DateTime dateTime;

  Record(this.memo, this.type, this.price, this.category, this.dateTime);
}



