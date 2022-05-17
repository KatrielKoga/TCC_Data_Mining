CREATE DEFINER=`root`@`localhost` FUNCTION `GetDiaSemana`(data_uso date) RETURNS varchar(10) CHARSET utf8mb4
begin
  return dayname(data_uso);
end