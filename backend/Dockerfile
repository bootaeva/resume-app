# Base image — Python 3.11, slim variant for smaller/more secure image
FROM python:3.11-slim

# Set working directory inside the container — all commands run from here
WORKDIR /app

# Security: create a non-root user — never run containers as root
RUN addgroup --system appgroup && adduser --system --ingroup appgroup appuser

# Copy all local files into the container's /app folder
COPY . .

# Install dependencies — no cache keeps the image size small
RUN pip install --no-cache-dir -r requirements.txt

# Switch to non-root user before starting the app
USER appuser

# Start the server — 0.0.0.0 makes it reachable from outside the container
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]