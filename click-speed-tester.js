        var clickCount = 0;
        var timeRemaining = 5;
        var isRunning = false;
        var timerInterval = null;
        var clicksPerSecond = 0;

        function startTest() {
            clickCount = 0;
            timeRemaining = 5;
            isRunning = true;

            document.getElementById('clickCount').textContent = '0';
            document.getElementById('timer').textContent = '5';
            document.getElementById('startBtn').disabled = true;
            document.getElementById('resetBtn').disabled = true;
            document.getElementById('clickZone').classList.add('active');
            document.getElementById('resultMessage').classList.remove('show');

            timerInterval = setInterval(function () {
                timeRemaining = timeRemaining - 1;
                document.getElementById('timer').textContent = timeRemaining;

                if (timeRemaining <= 0) {
                    endTest();
                }
            }, 1000);
        }

        function endTest() {
            isRunning = false;
            clearInterval(timerInterval);

            document.getElementById('startBtn').disabled = false;
            document.getElementById('resetBtn').disabled = false;
            document.getElementById('clickZone').classList.remove('active');

            clicksPerSecond = clickCount / 5;

            var message = '';
            if (clicksPerSecond < 5) {
                message = 'Speed: ' + clicksPerSecond.toFixed(1) + ' clicks/sec. Room to improve!';
            } else if (clicksPerSecond < 8) {
                message = 'Speed: ' + clicksPerSecond.toFixed(1) + ' clicks/sec. Pretty solid!';
            } else {
                message = 'Speed: ' + clicksPerSecond.toFixed(1) + ' clicks/sec. Lightning fast!';
            }

            var resultElement = document.getElementById('resultMessage');
            resultElement.textContent = message;
            resultElement.classList.add('show');
        }

        function handleClick() {
            if (isRunning) {
                clickCount = clickCount + 1;
                document.getElementById('clickCount').textContent = clickCount;
            }
        }

        function resetTest() {
            if (timerInterval) {
                clearInterval(timerInterval);
            }

            clickCount = 0;
            timeRemaining = 5;
            isRunning = false;

            document.getElementById('clickCount').textContent = '0';
            document.getElementById('timer').textContent = '5';
            document.getElementById('startBtn').disabled = false;
            document.getElementById('resetBtn').disabled = false;
            document.getElementById('clickZone').classList.remove('active');
            document.getElementById('resultMessage').classList.remove('show');
        }

        document.getElementById('clickZone').addEventListener('click', handleClick);