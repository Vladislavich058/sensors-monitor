# sensors-monitor
Руководство по развертыванию

Имеется два способа развертывания приложения:
  1. Docker
     1. Установите и запустите docker
     2. Перейдите в каталог sensors-monitor
     3. init.sql - SQL cкрипт генерации бд, таблиц и начальных данных
     4. В docker-compose.yml вы можете настроить с помощью environment variables доступ к БД PostgreSQL, а так же pgAdmin
     5. В терминале введите команду docker-compose up -d --build
     6. После развертывания приложение будет доступно по порту 4200. Порт 8081 содержит pgAdmin
  2. Вручную
     1. Убедитесь, что у вас установлена jdk 11
     2. Убедитесь, что у вас установлен node.js
     3. Сгенерируйте бд с помощью init.sql
     4. В application.properties насстройте путь, логин и пароль к БД
     5. Перейдите в каталог sensors-monitor-backend
     6. Запустите команду mvn clean install
     7. Перейдите в каталог target.
     8. Запустите сгенерированный jar файл (допускается команда java -jar *.jar)
     9. Перейдите в каталог sensors-monitor-frontend
     10. Запустите команду npm install
     11. Запустите команду npm start
     12. Приложение доступно по порту 4200.

Начальные данные для админа:
  username: admin
  password: admin
Начальные для пользователя:
  username: user
  password: user

P.S. Данные пользователей задаются в init.sql.
P.P.S Возможные проблемы при развертывании приложения, связанные с mvn решаются изменением line endings с CRLF на LF (for Windows users)
