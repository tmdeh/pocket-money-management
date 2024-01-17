import 'package:freezed_annotation/freezed_annotation.dart';

part 'calender_event.freezed.dart';

@freezed
class CalenderEvent with _$CalenderEvent {
  const factory CalenderEvent.onTapDay(DateTime selectedDay) = OnTapDay;
}
