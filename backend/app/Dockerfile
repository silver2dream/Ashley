FROM centos:7

ENV GOROOT /usr/local/go
ENV GOPATH /data/go
ENV PATH $GOROOT/bin:$PATH

#-------Golang and Package--------------
RUN curl -s -o go.tar.gz https://dl.google.com/go/go1.15.linux-amd64.tar.gz
RUN tar --remove-files -C /usr/local/ -zxf go.tar.gz
RUN mkdir -p /data/go

#-------Workdir--------------
ADD . /project
WORKDIR /project/backend

CMD /usr/sbin/init