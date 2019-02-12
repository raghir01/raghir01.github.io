if __name__ == '__main__':
    with open("table.txt", 'w') as o:
        with open("cities.csv") as f:
            next(f)  # skip header
            for line in f:
                # print(line.split(","))
                template = """ <tr>
                        <th scope="row">{}</th>
                        <td>{}</td>
                        <td>{}</td>
                        <td>{}</td>
                        <td>{}</td>
                        <td>{}</td>
                        <td>{}</td>
                        <td>{}</td>
                        <td>{}</td>
                        <td>{}</td>
                    </tr>""".format(*line.split(","))
                print(template)
                o.write(template)
                o.write("\n")
