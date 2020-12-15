function token() {
            const date = new Date()
            var y = convertTZ(date, "Asia/Jakarta").getFullYear().toString();
            var m = convertTZ(date, "Asia/Jakarta").getMonth() + 1;
            var d = convertTZ(date, "Asia/Jakarta").getDate().toString();
            var h = convertTZ(date, "Asia/Jakarta").getHours().toString();
            var i = convertTZ(date, "Asia/Jakarta").getMinutes().toString();
            var x = y.concat(m.toString(), d, h, i);
            var array = x.split("");
            var i;
            var r = '';
            for (i = 0; i < array.length; ++i) {
                r += array[i] / 5;

            }
            return r.replaceAll('.', '');
        }

        function convertTZ(date, tzString) {
            return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {
                timeZone: tzString
            }));
        }
        $(document).ready(function () {
            $('#getpw').click(function () {
                alert(token());
            });
        });
